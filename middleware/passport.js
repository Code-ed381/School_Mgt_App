var passport = require('passport');
const con = require("../config/database");
var LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')


const customFields = {
    usernameField: 'username',
    passwordField: 'password',
};

const fetch = (username)=> {
    return new Promise((resolve, reject) => {
        con.query('SELECT * FROM users WHERE email = ?', [ username ], function(err, results, fields) {
            if (err) {
                reject(err);
            }
            else {
                resolve(results)
            }
        })
    })
}

const verifyCallback = async (username, password, done)=> {
    const results = await fetch(username)
    
    if(results[0] != undefined) {
        bcrypt.compare(password, results[0].hash, (err, result) => {
    
            if (err) return done(err)
            if (result) {
                return done(null, true)
            }
            else {
                return done(null, false);
            }

        })
    }
    else {
        return done(null, false);
    }
}
  
const strategy = new LocalStrategy(customFields, verifyCallback);
passport.use(strategy)

passport.serializeUser(function (user, cb) {
    process.nextTick(function() {
        cb(null, { id:user.id, username: user.username})
    })
})

passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user)
    })
})
 
const isAuth = (req, res, next)=> {
    if(req.isAuthenticated()) {
        next()
    }
    else{
        res.json({ message: 'not authorized'})
        // res.redirect('/notAuthorized')
    }
}

const isAdmin = (req, res, next)=> {
    if(req.isAuthenticated() && req.user.isAdmin) {
        next()
    }
    else{
        res.redirect('/notAuthorizedAdmin')
    }
}
 
const userExists = (req, res, next)=> {
    con.query('SELECT * from users where username=?', [req.body.username], (error, results, fields)=> {
        if(error) {
            console.log("Error")
        }
        else if(results.length>0) {
            res.redirect('/userAlreadyExists')
        }
        else { 
            next() 
        }
    })
}

const auth = passport.authenticate('local', {
    // successRedirect: '/login-success',
    failureRedirect: '/login-failure'
})

module.exports = {
    isAuth,
    isAdmin,
    userExists,
    auth
}