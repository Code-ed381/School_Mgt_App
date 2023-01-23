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
                res.json({message:'logged_in'}) 
                console.log(result) 
            }) 
        })
    })
}

const loginView = (req, res, next) => {
    con.query(`SELECT username FROM users WHERE email = 'eddyz@admin.com'`, (err, results, fields) => {
        if (err) throw err
        res.send(results)
        console.log(results)
    })
}

const GetUsersView = (req, res, next) => {
    con.query(`SELECT user_id,username,email,age,phone_num,role,first_name,middle_name,last_name,nationality FROM users`, (err, results, fields) => {
        if (err) throw err
        res.send(results)
        console.log(fields)
    }) 
}

module.exports = {
    registerView,
    loginView,
    GetUsersView
}