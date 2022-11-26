const con = require("../config/database");
const { genPassword } = require("../middleware/passport");
//CRUD for sch_mgt_app
//Create

const registerView =  (req, res, next)=>{
    // const { firstname, middlename, lastname, email, password} = req.body;
    // con.query('INSERT INTO users (firstName, middleName, lastName, email, password) VALUES (?, ?, ?, ?, ?)',[firstname, middlename, lastname, email, password], (error, result) => {
    //     if (error) throw error;
    //     res.send('Inserted')
    //     console.log(result) 
    // })

    const { username, password } = req.body
    const saltHash = genPassword(password)
    const salt = saltHash.salt
    const hash = saltHash.hash
    
    con.query(`INSERT INTO users (username, hash, salt, isAdmin) VALUES (?, ?, ?, 0)`,[ username, hash, salt], (error, result) => {
        if (error) throw error; 
        res.send('Inserted')
        console.log(result) 
    })

}

const loginView = (req, res, next)=> {
    con.query('SELECT * FROM users', (error, data)=> {
      if (error) return res.json(error)
      // result = Object.values(JSON.parse(JSON.stringify(rows)));
      // result.forEach(element => {
      //   console.log(element.item)  
      // });
  
      const students = res.json(data)
      console.log(students)
      return students 
    });
}


module.exports = {
    registerView,
    loginView
}