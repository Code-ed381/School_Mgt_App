const express = require('express');
var passport = require('passport');
const { registerView, loginView } = require('../controllers/loginController');
const { userExists } = require("../middleware/passport");
const app = express.Router();



//CRUD for sch_mgt_app
//Create
app.post('/signup/new',userExists, registerView)

//Read
app.post('/login', passport.authenticate('local', {
    successRedirect: '/login-success',
    failureRedirect: '/login-failure'
}), (req, res, next)=> {
    console.log(req.body.password)
});

app.get('/login', (req, res, next) => {
    res.render('login')
})

app.get('/login-success', (req, res, next)=> {
    res.json({message: "Logged in successfuly"})
})

app.get('/login-failure', (req, res, next)=> {
    res.json({message: "Log in failed"})
})

app.get('/logout', (req, res, next)=> {
    req.logout(function(err) {
        if (err) { console.log(error) }
        res.redirect('/login')
    });
})

app.get('/userAlreadyExists', (req, res, next)=> {
    res.json({message: "User already exists"})
})
 
module.exports = app;