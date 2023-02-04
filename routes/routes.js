const express = require('express');
const { userExists, isAuth, auth, user } = require("../middleware/passport");
const app = express.Router();
const { validateToken } = require('../middleware/tokens')
const { 
    registerView, 
    loginView, 
    GetUsersView, 
    GetStudentsView, 
    GetFilteredUsersView,
    UpdateView,
    DeleteView,
    AddStudentView
} = require('../controllers/controller');

//Register new user 
app.post('/register', registerView) 

//Login user
app.post('/login', loginView)

app.get('/', validateToken, (req, res, next) => {
    res.send({ message: 'authorized'}) 
})

app.get('/authenticate', validateToken, (req, res, next) => {
    res.send({ message: 'authenticated'})
})

//Read
app.post('/login/password', isAuth, (req, res, next) =>{
    // const accessToken = createTokens(user)
    // res.cookie('access-token', accessToken, {
    //     maxAge: 60*60*24*30*1000,
    // })
});

app.put('/update/:id', UpdateView);

app.delete('/users/:id', DeleteView);


app.get('/users', GetUsersView);

// app.post('/users', GetFilteredUsersView);

app.get('/students', GetStudentsView); 

app.post('/addstudent', AddStudentView); 


app.get('/signup', (req, res, next) => {
    res.render('register') 
})


app.get('/login-success', (req, res, next)=> {
    res.json({message:'logged_in'}) 
})

app.get('/login-failure', (req, res, next)=> {
    res.json({message: 'Invalid username or password'})
})

app.get('/logout', (req, res, next)=> {
    res.clearCookie('access-token')
    res.end()
})

// app.get('/userAlreadyExists', (req, res, next)=> {
//     res.json({message: "User already exists"})
// })

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