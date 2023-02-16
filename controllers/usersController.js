const User = require('../model/User')

const getUser = async (req, res, next) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'User ID required' })

    const user = await User.findOne({ _id: req.params.id }).exec();

    if(!user) {
        return res.status(204).json({ 'message': `No user matches ID ${ req.body.id }`})
    }
    res.json(user)
}


const getAllUsers = async (req, res, next) => {
    const users = await User.find();

    if (!users) return res.status(204).json({ 'message': 'No users found.'})
    res.json(users)
}

const updateUser = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required '})
    }

    const user = await User.findOne({ _id: req.body.id }).exec()

    if(!user) {
        return res.status(400).json({ "message": `No user matches ID ${req.body.id}` });
    }
    if (req.body?.username) user.username = req.body.username;
    if (req.body?.lastname) user.lastname = req.body.lastname;

    const result = await user.save();
    res.json(result)
}

const deleteUser = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'message': 'User ID required' })

    const user = await User.findOne({ _id: req.body.id }).exec()
    if(!user) {
        return res.status(400).json({ "message": `User ${req.body.id} not found` });
    }

    const result = await User.deleteOne({ _id: req.body.id })

    res.json(result)
}

module.exports = {
    getUser,
    getAllUsers,
    updateUser,
    deleteUser
}