const express = require("express");
const con = require("./config/database");
const cookieParser = require("cookie-parser");
// const set_session = require("./middleware/session");
// var passport = require('passport'); 
const app = express();
const cors = require("cors"); 
const bodyParser = require('body-parser');
require('dotenv').config()


app.use(cookieParser())
app.use(cors())
app.use(express.json())
// app.use(set_session)
// app.use(passport.initialize())
// app.use(passport.session())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true})) 
  

con.connect(function(err) {
  if (!err) { 
    console.log("Database Connected!")
  }
  else {
    throw err;  
  }
});

app.use('/', require('./routes/routes'))

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
}); 