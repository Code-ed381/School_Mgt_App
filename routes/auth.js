const express = require('express');
const { registerView, loginView, GetUsersView } = require('../controllers/signup-controller');
const { userExists, isAuth, auth } = require("../middleware/passport");
const app = express.Router();


 
//CRUD for sch_mgt_app
//Create
app.post('/signup/new', userExists, registerView)

//Read
app.post('/login/password', isAuth, );


app.get('/getusers',auth, GetUsersView);

app.get('/login', auth, loginView)

app.get('/signup', (req, res, next) => {
    res.render('register') 
})

app.get('/', auth, (req, res, next) => {
    res.send({ message: 'authorized'})
})

app.get('/login-success', (req, res, next)=> {
    res.json({message:'logged_in'}) 
})

app.get('/login-failure', (req, res, next)=> {
    res.json({message: 'Invalid username or password'})
})

app.get('/logout', (req, res, next)=> {
    req.logout(function(err) {
        if (err) { console.log(error) }
        res.json({message: 'Logged out'})
    });
})

app.get('/userAlreadyExists', (req, res, next)=> {
    res.json({message: "User already exists"})
})

// app.get('/notAuthorized', (req, res, next)=> {
//     res.redirect('/login')
// })

app.get('/protected-route', isAuth, (req, res, next)=> {
    res.send('This route is protected')
})

app.get('/admin-route', isAuth, (req, res, next)=> {
    res.send('This is an admin account')
})

app.get('/notAuthorized', isAuth, (req, res, next)=> {
    res.json({ message: 'You are not authorized to view this page'})
})

app.get('/notAuthorizedAdmin', isAuth, (req, res, next)=> {
    res.send('You are not authorized to view admin page')
})
 
module.exports = app;