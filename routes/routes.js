const express = require('express');
const { userExists, isAuth, auth, user } = require("../middleware/passport");
const router = express.Router();
const { validateToken } = require('../middleware/tokens')
const { 
    registerView, 
    loginView,
    GetFilteredUsersView,
} = require('../controllers/controller');

//Register new user 
// router.post('/register', registerView)  

// router.post('/users', AddStudentView); 

//Login user
// router.post('/login', loginView)

// router.get('/', validateToken, (req, res, next) => {
//     res.send({ message: 'authorized'}) 
// })

// router.get('/authenticate', validateToken, (req, res, next) => {
//     res.send({ message: 'authenticated'})
// })

//Read
// router.post('/login/password', isAuth, (req, res, next) =>{
//     // const accessToken = createTokens(user)
//     // res.cookie('access-token', accessToken, {
//     //     maxAge: 60*60*24*30*1000,
//     // })
// });

// router.put('/update/:id', UpdateView);

// router.delete('/users/:id', DeleteView);


// router.get('/users', GetUsersView);

// router.post('/users', GetFilteredUsersView);

// router.get('/students', GetStudentsView); 



router.get('/signup', (req, res, next) => {
    res.render('register') 
})


router.get('/login-success', (req, res, next)=> {
    res.json({message:'logged_in'}) 
})

router.get('/login-failure', (req, res, next)=> {
    res.json({message: 'Invalid username or password'})
})

// router.get('/logout', (req, res, next)=> {
//     res.clearCookie('access-token')
//     res.end()
// })

// router.get('/userAlreadyExists', (req, res, next)=> {
//     res.json({message: "User already exists"})
// })

// router.get('/notAuthorized', (req, res, next)=> {
//     res.redirect('/login')
// })

router.get('/protected-route', isAuth, (req, res, next)=> {
    res.send('This route is protected')
})

router.get('/admin-route', isAuth, (req, res, next)=> {
    res.send('This is an admin account')
})

router.get('/notAuthorized', isAuth, (req, res, next)=> {
    res.json({ message: 'You are not authorized to view this page'})
})

router.get('/notAuthorizedAdmin', isAuth, (req, res, next)=> {
    res.send('You are not authorized to view admin page')
})
 
module.exports = router;