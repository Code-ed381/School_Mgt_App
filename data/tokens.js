const { sign, verify } = require('jsonwebtoken')


module.exports.createTokens = (user)=> {
    const accessToken = sign({ username: user.username, id: user.user_id },
        '78fcf956640495c817b0efeda45ee58c8176673de390fe6311a76b0bbf6d79626047f4050fb432f38fc22b02fe72cdab162dfd6a1d1a857dbcec3bc20cd6bf6d'
    );

    return accessToken;
} 

