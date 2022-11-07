const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require("cors");
const passport = require('passport');
const bodyParser = require('body-parser')
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session)

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3001;


app.use(session({
  key: 'user_session',
  secret: 'shadow',
  store: new MySQLStore({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'cookie-user'
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000*60*60*24,
  }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: 'user',
  multipleStatements: true
});

con.connect(function(err) {
  if (!err) {
    console.log("Connected!")
  }
  else {
    throw err;
  }
});

const customFields = {
  usernameField:'uname',
  passwordField:'pw',
};

/*Passport JS*/
const verifyCallback = (username, password, done) => {
  con.query("SELECT * FROM users WHERE username = ?", [username], function(error, results, fields) {
    if (error) return done(error);

    if (results.length == 0) {
      return done(null, false);
    }
    const isValid = validPassword(password, result[0].hash, results[0].salt);
    user = {id:results[0].id,username:results[0].username,hash:results[0].hash,salt:results[0].salt};
    if(isValid){
      return done(dull,user);
    }
    else {
      return done(null,false)
    }
  })
}

const strategy = new LocalStrategy(customFields, verifyCallback);
passport.use(strategy);

passport.serializeUser((user,done) => {
  console.log("inside serialize");
  done(null,user.id)
});

passport.deserializeUser(function(userId,done) {
  console.log('deserializeUser', userId);
  con.query('SELECT * FROM users where id = ?',[userId], function(error,results) {
    done(null, results[0]);
  });
});

function validPassword(password,hash,salt) {
  var hashVerify = crypto.pbkdf2Sync(password,salt,10000,60,'sha512').toString('hex');
  return hash === hashVerify;
}

function genPassword(password) {
  var salt = crypto.randomBytes(32).toString('hex');
  var genhash = crypto.pbkdf2Sync(password,salt,10000,60,'sha512').toString('hex')
  return {salt:salt, hash:genhash}
}

function isAuth(req,res,next) {
  if(req.isAuthenticated()) {
    next();
  }
  else {
    res.redirect('/login')
  }
}

function isAdmin(req,res,next) {
  if(req.isAuthenticated() && req.user.isAdmin == 1){
    next();
  }
  else {
    res.redirect('/login')
  }
}

function userExists(req,res,next){
  con.query('SELECT * FROM users WHERE username=?', [req.body.uname], function(error, results, fields) {
    if (error) {
      console.log("Error")
    }
    else if(results.length > 0) {
      res.redirect("/login")
    }
    else{
      next()
    }
  });
};
// passport.use(new LocalSTrategy(function verify(email, password, cb) {
//   con.query('SELECT * FROM login WHERE email = ?', [ email ], function(err, user) {
//     if (err) { return cb(err); }
//     if (!user) { return cb(null, false, { message: 'Incorrect username or password' }); }

//     var salt = crypto.randomBytes(32).toString('hex');

//     crypto.pbkdf2(password, salt, 310000, 32, 'sha256', function(eer, hashedPassword) {
//       if (err) { return cb(err); }
//       if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
//         return cb(null, false, { message: 'Incorrect username or password'});
//       }
//       return cb(null, user);
//     })
//   })
// }))

app.get("/", (req, res, next) => {
  res.send("<h1>Home</h1><p>Please <a href='/register'>Register</a></p>")  
})

app.get('/login', (req, res, next) => {
  res.render('login')
})

app.get("/welcome", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('logout', (req, res, next) => {
  req.logOut();
  res.redirect('/protected-route');
});

app.get('/login-success', (req, res, next) => {
  res.send('<p>You successfully logged in. --> <a href="/protected-route">Go to protected route</a></p>')
})

app.get('/login-failure', (req, res, next) => {
  res.send('You entered the wrong password');
});

app.get('register', (req, res, next) =>{
  console.log("Inside get");
  res.render('register')
})


app.post("/login/password", 
//   (req, res) => {
//     const username = req.body.username
//     const email = req.body.mail
//     const password = req.body.password  

//   con.query("INSERT INTO login VALUES (?, ?, ?) " ,[username, email, password],
//   (err, result) => {
//     console.log(err)
//   }
//   )
// }
  passport.authenticate('local', { failureRedirect: '/login', failureMessage: true}),
  function(req, res) {
    res.redirect('/~' + req.user.username)
  }
)
;

  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});