const express = require("express");
const con = require("./config/database");
const passport_middleware = require("./middleware/passport");
const set_session = require("./middleware/session");
var passport = require('passport');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const session = require("express-session");



app.use(express.json())
app.use(cors())
app.use(set_session)
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded()) 
app.use(express.static('./public'))
app.set('view engine', 'ejs')


  
con.connect(function(err) {
  if (!err) { 
    console.log("Connected!")
  }
  else {
    throw err;
  }
});




app.use('/', require('./routes/login'))

const PORT = process.env.PORT || 3001;



// //CRUD for todo
// //Create
// app.post('/addtask', (req, res, next)=>{
//   const todo = req.body.task
//   con.query('INSERT INTO todos(item) VALUES (?)',[todo], (error, result) => {
//       if (error) throw error;
//       res.send('Inserted')
//       console.log(result)
//   })
// })

// //Read
// app.get('/todos', (req, res, next)=> {
//   con.query('SELECT * FROM todos', (error, data)=> {
//     if (error) return res.json(error)
//     // result = Object.values(JSON.parse(JSON.stringify(rows)));
//     // result.forEach(element => {
//     //   console.log(element.item)  
//     // });
//     return res.json(data)
//   });
// });

// //Delete
// app.delete("/todos/:id", (req, res)=> {
//   const bookId = req.params.id;
//   const query = "DELETE FROM todos WHERE id = ?" ;
//   con.query(query, [bookId], (err, data)=> {
//     if (err) return res.json(err);
//     return res.json("Todo has been deleted successfully")
//   })
// })






//Delete
app.delete("/todos/:id", (req, res)=> {
  const bookId = req.params.id;
  const query = "DELETE FROM todos WHERE id = ?" ;
  con.query(query, [bookId], (err, data)=> {
    if (err) return res.json(err);
    return res.json("Todo has been deleted successfully")
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
}); 