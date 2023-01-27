const { sign, verify } = require('jsonwebtoken')
require('dotenv').config()

const createTokens = (user)=> {
    const accessToken = sign(
        { username: user[0].username, id: user[0].user_id },
        process.env.ACCESS_TOKEN_SECRET
    );

    return accessToken;
};

const validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"]

    if (!accessToken) return res.status(400).json({ message: "User not authenticated"})

    try {
        const validToken = verify(accessToken, process.env.ACCESS_TOKEN_SECRET)

        if (validToken) {
            req.authenticated = true;
            return next();
        }
    }
    catch(err) {
        return res.status(400).json({ message: err})
    }
}


module.exports = { createTokens, validateToken }
