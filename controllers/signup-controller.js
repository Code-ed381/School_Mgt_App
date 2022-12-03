const con = require("../config/database");
const bcrypt = require('bcrypt')


//CRUD for sch_mgt_app
//Create

const registerView =  (req, res, next)=>{
    const { username, password, admin } = req.body

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {

            con.query(`INSERT INTO users (username, hash, salt, isAdmin) VALUES (?, ?, ?, ?)`,[ username, hash, salt, admin], (error, result) => {
                if (error) throw error; 
                res.send('Inserted')
                console.log(result) 
            })
        })
    })
}

const loginView = (req, res, next) => {
    con.query(`SELECT id,username,isAdmin FROM users WHERE username = ?`, [username])
}

module.exports = {
    registerView
}