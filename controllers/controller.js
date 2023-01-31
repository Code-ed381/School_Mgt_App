const con = require("../config/database");
const bcrypt = require('bcrypt')
const { createTokens } = require('../middleware/tokens')
const decode = require('jwt-decode')

 
//CRUD for sch_mgt_app
//Create

const registerView =  (req, res, next)=>{
    const { username, password, email, role } = req.body 

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            con.query(`INSERT INTO users (email, username, hash, salt, role) VALUES (?, ?, ?, ?, ?)`,[ email, username, hash, salt, role], (error, result) => {
                if (error) return res.json({message: "Username already exist"}); 
                res.json({message:'logged_in'}) 
                console.log(result) 
            }) 
        })
    })
}

const  loginView = async (req, res, next) => {
    const { username, password } = req.body

    con.query(`SELECT username, hash, user_id FROM users WHERE email = ? OR username = ?`, [username, username], (err, results, fields) => {
        if (err) return res.json({message: err})

        if (!results[0].hash) {
            return res.json({ message: 'Incorrect username or password' })
        }
        else {
            const dbPassword = results[0].hash
    
            bcrypt.compare(password, dbPassword).then((match)=> {
                if (!match) {
                    return res.json({message: "Incorrect username or password"})
                }
                else {
                    const accessToken = createTokens(results) 
    
                    res.cookie("access-token", accessToken, {
                        maxAge: 20000 * 3 * 10
                    });
    
                    res.json({message: decode(accessToken)})

                    // console.log(decode(accessToken))
                }
            }) 
        }
    })
}



const GetUsersView = (req, res, next) => {
    con.query(`SELECT first_name,last_name,username,date_of_birth,phone,grade_id,address,town_of_birth,role,email,profile_id FROM users RIGHT JOIN profile ON users.user_id=profile.user_id`, (err, results, fields) => {
        if (err) throw err
        console.log(results)
        res.send(results)
    }) 
}

const GetFilteredUsersView = (req, res, next) => {
    const { role } = req.body 

    con.query(`SELECT first_name,last_name,username,date_of_birth,phone,grade_id,address,town_of_birth,role,email FROM users RIGHT JOIN profile ON users.user_id=profile.user_id where role = ?`,[role], (err, results, fields) => {
        if (err) throw err
        res.send(results)
    }) 
}

const GetStudentsView = (req, res, next) => {
    con.query(`SELECT first_name, last_name, grade, date_of_birth FROM students`, (err, results, fields) => {
        if (err) throw err
        res.send(results)
    }) 
}

module.exports = {
    registerView,
    loginView,
    GetUsersView,
    GetStudentsView,
    GetFilteredUsersView
}