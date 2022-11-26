const session =  require('express-session');
var MySQLStore = require('express-mysql-session')(session)

module.exports = session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: new MySQLStore({
        host: 'localhost',
        port: 3306,
        user: 'root',
        database:'cookie_user'
    }),
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000*60*60*24
    }
})