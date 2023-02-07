const express = require("express");
const con = require("./config/database");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors"); 
const corsOptions = require('./config/corsOptions')
const bodyParser = require('body-parser');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config()

// Custom middleware logger
// app.use(logger)

//Handles cross origin data/resource sharing

app.use(cors(corsOptions))

//Built-in middleware to handle urlencoded data(form data) - content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true})) 




app.use(cookieParser())
app.use(express.json())
// app.use(set_session)
// app.use(passport.initialize())
// app.use(passport.session())
app.use(bodyParser.json())
  

con.connect(function(err) {
  if (!err) { 
    console.log("Database Connected!")
  }
  else {
    throw err;  
  }
});

app.use('/', require('./routes/routes'))
app.use('/students', require('./routes/api/students'))

// app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
}); 