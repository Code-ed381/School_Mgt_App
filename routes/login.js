const express = require('express');
var passport = require('passport');
const { registerView, loginView } = require('../controllers/loginController');
const { userExists } = require("../middleware/passport");
const app = express.Router();



//CRUD for sch_mgt_app
//Create
app.post('/signup/new',userExists, registerView)

//Read
app.post('/login/password', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

app.get('/login', (req, res, next) => {
    res.send('Welcome')
})



module.exports = app;