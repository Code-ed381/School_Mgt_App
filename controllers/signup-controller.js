const con = require("../config/database");
const bcrypt = require('bcrypt')


//CRUD for sch_mgt_app
//Create

const registerView =  (req, res, next)=>{
    const { username, password } = req.body

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {

            con.query(`INSERT INTO users (username, hash, salt, isAdmin) VALUES (?, ?, ?, 0)`,[ username, hash, salt], (error, result) => {
                if (error) throw error; 
                res.send('Inserted')
                console.log(result) 
            })
        })
    })
}

module.exports = {
    registerView
}