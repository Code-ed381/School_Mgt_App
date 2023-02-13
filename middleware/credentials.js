const allowedOrigins = require('../config/allowedOrigins')

const credentials = (req, res, next)=> {
    const origin = req.headers.origin;
    if(allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', true);
        res.header("Access-Control-Allow-Origin", "*");
    }
    next()
}

module.exports = credentials