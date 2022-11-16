const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require("cors");
const bodyParser = require('body-parser')


app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3001;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: 'todo'
});

con.connect(function(err) {
  if (!err) {
    console.log("Connected!")
  }
  else {
    throw err;
  }
});

app.get("/", (req, res, next) => {
  res.json({ message: "Hello from server!" });
}) 


//CRUD
//Create
app.post('/addtask', (req, res, next)=>{
  const todo = req.body.task
  con.query('INSERT INTO todos(item) VALUES (?)',[todo], (error, result) => {
      if (error) throw error;
      res.send('Inserted')
      console.log(result)
  })
})

//Read
app.get('/todos', (req, res, next)=> {
  con.query('SELECT * FROM todos', (error, data)=> {
    if (error) return res.json(error)
    // result = Object.values(JSON.parse(JSON.stringify(rows)));
    // result.forEach(element => {
    //   console.log(element.item)  
    // });
    return res.json(data)
  });
});

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