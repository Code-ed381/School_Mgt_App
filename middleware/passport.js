var passport = require('passport');
const con = require("../config/database");
var LocalStrategy = require('passport-local').Strategy
var crypto = require('crypto')

const customFields = {
    usernameField: 'username',
    passwordField: 'password',
};

const verifyCallback = (username, password, done)=> {
    con.query('SELECT * FROM users WHERE username = ?', [ username ], function(err, results, row) {
        if (err) 
            return done(err);

        if (results.length == 0) 
            return done(null, false, { message: 'Incorrect email or password' });

        const isValid = validPassword(password, results[0].hash, results[0].salt);
        user = {id:results[0].id, username:results[0].username, hash:results[0].hash, salt:results[0].salt}
    
        // crypto.pbkdf2(password, row.salt, 31000, 32, 'sha256', function(err, hashedPassword){
        //   if (err) return done(err);
        //   if(!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
        //     return done(null, false, { message: 'Incorrect username or password.'});
        //   }
        //   return done(null, row);
        // })
        if(isValid) {
            return  done(null, user);
        }
        else {
            return done(null, user);
        }
    })
}

const strategy = new LocalStrategy(customFields, verifyCallback);
passport.use(strategy)

const genPassword = (password, salt) => {
    var salt = crypto.randomBytes(32).toString('hex');
    var genhash = crypto.pbkdf2Sync(password, salt, 10000, 60, 'sha512').toString('hex')
    return {salt:salt, hash:genhash}
}

const validPassword = (password, hash, salt) => {
    var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 60, 'sha512').toString('hex');
    return hash = hashVerify
}

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
        res.redirect('/notAuthorized')
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

module.exports = {
    validPassword,
    genPassword,
    isAuth,
    isAdmin,
    userExists
}