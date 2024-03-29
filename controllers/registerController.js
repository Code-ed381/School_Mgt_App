const User = require('../model/User')
const bcrypt = require('bcrypt')

const handleNewUser = async (req, res) => {
    const { user, email, pwd } = req.body;
    if( !user || !email || !pwd ) return res.status(400).json({ 'message': 'Username and password are required.'});

    //Check for duplicate usernames in the database
    const duplicate = await User.findOne({ username: user }).exec();
    if (duplicate) return res.sendStatus(409);
    
    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);

        //Create and store the new user
        const result = await User.create({ 
            "username": user,
            "email": email,
            "password": hashedPwd 
        });

        console.log(result)
        
        // res.status(201).json({ 'success': `New user ${user} created!` });
        res.sendStatus(201);
        
    } catch (error) {
        res.status(500).json({'message': error.message})
    }
}

module.exports = { handleNewUser }
