const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require("cors");
const passport = require('passport');
const bodyParser = require('body-parser')
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
const cookieParser = require('cookie-parser');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session)

app.use(express.json())
app.use(cors())
app.use(cookieParser)

const PORT = process.env.PORT || 3001;


app.use(session({
  key: 'user_session',
  secret: 'shadow',
  store: new MySQLStore({
    host: 'localhost',
    user: 'root',
    database: 'cookie_user' 
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
  usernameField:'username',
  passwordField:'password',
};

/*Passport JS*/
const verifyCallback = (username, password, done) => {
  con.query("SELECT * FROM users WHERE username = ?", [username], function(error, results, fields) {
    if (error) return done(error);

    if (results.length == 0) {
      return done(null, false);
    }
    const isValid = validPassword(password, results[0].hash, results[0].salt);
    user = {id:results[0].id,username:results[0].username,hash:results[0].hash,salt:results[0].salt};
    if(isValid){
      return done(null,user);
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
  con.query('SELECT * FROM users WHERE username=?', [req.body.username], function(error, results, fields) {
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

//Routes
app.get("/", (req, res, next) => {
 
})

// app.post('/login/password', passport.authenticate('local'), (req, res, next) => {
//   res.send('ok')
// })

app.get("/welcome", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/logout', (req, res, next) => {
  req.logOut((err) => {
    if (err) { return next(err); }
    res.redirect('/');
  })
});

app.get('/login-success', (req, res, next) => {
  res.json({ message: 'Logged in'})
})

app.get('/login-failure', (req, res, next) => {
  res.json({ message: 'You entered the wrong password' });
});

app.get('/register', (req, res, next) =>{
  console.log("Inside get");
  res.json({ message:'Successfully registered' })
  console.log(req.body.username)
})


// app.post("/login/password", 
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
//   passport.authenticate('local', { failureRedirect: '/login', failureMessage: true}),
//   function(req, res) {
//     res.redirect('/~' + req.user.username)
//   }
// )
// ;

app.post('/register', userExists, (req,res,next) => {
  console.log("Inside post");
  console.log(req.body.password);
  const saltHash = genPassword(req.body.password);
  console.log(saltHash);
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  con.query('INSERT INTO users(username,hash,salt,isAdmin) VALUES(?,?,?,0)', [req.body.username,hash,salt], function(error, results, fields){
    if (error) {
      console.log(error)
    }
    else {
      console.log('Successfully entered')
    }
  });
  res.redirect('/login')
});

app.post('/login/password', passport.authenticate('local',{failureRedirect:'/login-failure',successRedirect:'/login-success'}));

app.get('/protected-route', isAuth,(req, res, next)=>{
  res.json({ message: "Logout" });
});

app.get('/admin-route',isAdmin,(req,res,next)=>{
  res.json({ message: "Logout and reload" });
})

app.get('/notAuthorized', (req,res,next) => {
  console.log("Inside get");
  res.json({ message:'' })
})

app.get('/notAuthorizedAdmin', (req,res,next)=> {
  console.log("Inside get");
  res.json({ message:"Retry to log in as admin"});
});

app.get('/userAlreadyExists', (req,res,next)=>{
  console.log("Inside get");
  res.json({ message:"Register with different username"});
});

  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
