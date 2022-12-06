const con = require("../config/database");
const bcrypt = require('bcrypt')


//CRUD for sch_mgt_app
//Create

const registerView =  (req, res, next)=>{
    const {email, username, password, admin } = req.body

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {

            con.query(`INSERT INTO users (email, username, hash, salt, isAdmin) VALUES (?, ?, ?, ?, ?)`,[ email, username, hash, salt, admin], (error, result) => {
                if (error) throw error; 
                res.send('Inserted')
                console.log(result) 
            }) 
        })
    })
}

const loginView = (req, res, next) => {
    con.query(`SELECT id,username,isAdmin FROM users WHERE username = ?`, [req.body.username], (err, results, fields) => {
        if (err) throw err
        res.send(results)
        console.log(results)
    })
}

module.exports = {
    registerView,
    loginView
}