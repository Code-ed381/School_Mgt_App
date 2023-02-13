require('dotenv').config()
const express = require("express");
const con = require("./config/database");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors"); 
const corsOptions = require('./config/corsOptions')
const bodyParser = require('body-parser');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT')
const credentials = require('./middleware/credentials')
const mongoose = require('mongoose')
const connectDB = require('./config/database')

// Connect to MongoDB
connectDB()

// Custom middleware logger
app.use(logger)

//Handle options credentials check - before CORS - and fetch cookies credentials requirement
app.use(credentials)

//Handles cross origin data/resource sharing
app.use(cors(corsOptions))

//Built-in middleware to handle urlencoded data(form data) - content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true})) 

//Middleware for cookies
app.use(cookieParser())


app.use(express.json())
// app.use(set_session)
// app.use(passport.initialize())
// app.use(passport.session())
app.use(bodyParser.json())
  

// con.connect(function(err) {
//   if (!err) { 
//     console.log("Database Connected!")
//   }
//   else {
//     throw err;  
//   }
// });



//Routes
// app.use('/', require('./routes'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));

app.use(verifyJWT);
app.use('/students', require('./routes/api/students'));

//Logs errors
app.use(errorHandler)

mongoose.connection.once('open', ()=> {
  console.log('connected to MongoDB')
  app.listen(process.env.PORT, () => {console.log(`Server running on port ${process.env.PORT}`);}); 
})