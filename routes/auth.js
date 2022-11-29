const express = require('express');
const { registerView} = require('../controllers/signup-controller');
const { userExists, isAuth, auth } = require("../middleware/passport");
const app = express.Router();



//CRUD for sch_mgt_app
//Create
app.post('/signup/newuser',userExists, registerView)

//Read
app.post('/login', auth);

app.get('/login', (req, res, next) => {
    res.render('login')
})

app.get('/signup', (req, res, next) => {
    res.render('register')
})

app.get('/', isAuth, (req, res, next) => {
    res.render('homepage')
})

app.get('/login-success', (req, res, next)=> {
    res.redirect('/')
})

app.get('/login-failure', (req, res, next)=> {
    res.redirect('/login')
    console.log('Invalid password')
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

app.get('/notAuthorized', (req, res, next)=> {
    res.redirect('/login')
})

app.get('/protected-route', isAuth, (req, res, next)=> {
    res.send('This route is protected')
})

app.get('/admin-route', isAuth, (req, res, next)=> {
    res.send('This is an admin account')
})

app.get('/notAuthorized', isAuth, (req, res, next)=> {
    res.send('You are not authorized to view this page')
})

app.get('/notAuthorizedAdmin', isAuth, (req, res, next)=> {
    res.send('You are not authorized to view admin page')
})
 
module.exports = app;