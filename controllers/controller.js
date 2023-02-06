const con = require("../config/database");
const bcrypt = require('bcrypt')
const { createTokens } = require('../middleware/tokens')
const decode = require('jwt-decode')


 
//CRUD for sch_mgt_app
//Create

const registerView =  (req, res, next)=>{
    const { username, password, email } = req.body 

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            con.query(`INSERT INTO users (email, username, hash, salt) VALUES (?, ?, ?, ?)`,[ email, username, hash, salt], (error, result) => {
                if (error) return res.json({message: "Username already exist"}); 
                res.json({message:'logged_in'}) 
                console.log(result) 
            }) 
        }) 
    })
}

const  loginView = async (req, res, next) => {
    const { username, password } = req.body

    con.query(`SELECT email, hash FROM users WHERE email = ?`, [username], (err, results, fields) => {
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
                        maxAge: 20000 * 3 * 10,
                        httpOnly: true 
                    });
    
                    res.json({message: accessToken})

                    // console.log(decode(accessToken))
                }
            }) 
        }
    })
}

const AddStudentView = (req, res) => {
    const {
        first_name,
        last_name, 
        phone,
        student_class,
        gender,
        address,
        hometown,
        dob,
        user
    } = req.body

    con.query(`INSERT INTO students_profile (first_name,last_name,phone,student_class,gender,address,hometown,dob,user) VALUES (?,?,?,?,?,?,?,?,?)`, [first_name,last_name,phone,student_class,gender,address,hometown,dob,user], (err, result)=> {
        if (err) console.log(err)
        return res.send(result) 
    })
}


const GetUsersView = (req, res, next) => {
    con.query(`SELECT * FROM students_profile CROSS JOIN users`, (err, results, fields) => {
        if (err) throw err
        console.log(results)
        res.send(results)
    }) 
}

const GetFilteredUsersView = (req, res, next) => {
    const { role } = req.body 

    con.query(`SELECT first_name,last_name,username,dob,phone,grade_id,address,hometown,email FROM users RIGHT JOIN students_profile ON users.id=students_profile.user where role = ?`,[role], (err, results, fields) => {
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


const UpdateView = (req, res) => {
    const id = req.params.id;
    const data = {
      name: req.body.name,
      age: req.body.age
    };
  
    let sql = "UPDATE users SET ? WHERE id = ?";
    let query = connection.query(sql, [data, id], (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
}

const DeleteView = (req, res) => {
    con.query("DELETE FROM users WHERE id = ?", [req.params.id], (err, results) => {
        res.send("Deleted successfully")
        console.log(results)
    })
}

module.exports = {
    registerView,
    loginView,
    GetUsersView,
    GetStudentsView,
    GetFilteredUsersView,
    UpdateView,
    DeleteView,
    AddStudentView
}