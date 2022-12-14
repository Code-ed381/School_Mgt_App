const con = require("../config/database");
const bcrypt = require('bcrypt')

 
//CRUD for sch_mgt_app
//Create

const registerView =  (req, res, next)=>{
    const {email, username, password, role } = req.body

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {

            con.query(`INSERT INTO users (email, username, hash, salt, role) VALUES (?, ?, ?, ?, ?)`,[ email, username, hash, salt, role], (error, result) => {
                if (error) throw error; 
                res.send('Inserted')
                console.log(result) 
            }) 
        })
    })
}

const loginView = (req, res, next) => {
    con.query(`SELECT id,email,role FROM users WHERE email = ?`, [req.body.username], (err, results, fields) => {
        if (err) throw err
        res.send(results)
        console.log(results)
    })
}

module.exports = {
    registerView,
    loginView
}