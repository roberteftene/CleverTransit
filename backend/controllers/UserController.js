const Review = require('../models').Review
const User = require('../models').User

const getAllUsers = async (req, res) => {
    try {
        await User.findAll()
            .then((allUsers) => {
                res.status(200).json(allUsers)
            })
    } catch (err) {
        res.status(404).send({
            message: 'No users found'
        })
    }
}

const addUser = async (req, res) => {
    try {
        let user = await User.create({
            id: req.body.id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        })
        res.status(200).send(user)
    } catch (err) {
        return res.status(500).send(err)
    }
}

const editUser = async (req, res) => {
    try {
        let user = await User.findByPk(req.params.id)
        if (user) {
            await user.update({
                id: req.body.id,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                username: req.body.username,
                password: req.body.password,
                email: req.body.email
            })

            res.status(200).send({
                message: 'User updated'
            })
        } else {
            res.status(404).send('User not found')
        }
    } catch (err) {
        res.status(500).send('Server error')
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (user) {
            await user.destroy()
            return res.status(200).send({
                message: 'User deleted'
            })
        } else {
            return res.status(404).send('resource not found')
        }
    } catch (err) {
        res.status(500).send({
            message: 'Server error'
        })
    }
}

const getUserById = async (req, res) => {
    try {
        let user = await User.findByPk(req.params.id)
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).send('Resource not found')
        }
    } catch (err) {
        res.status(500).send('Server error')
    }
}

const getReviewsByUserId = async (req, res) => {
    let uId;
    try {
        let user = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        uId = user.id

        let result = await Review.findAll({
            where: {
                userId: uId
            }
        })
        res.status(200).json(result)
    } catch (err) {
        res.status(500).send('Server error')
    }
}

module.exports = {
    getAllUsers,
    addUser,
    editUser,
    deleteUser,
    getUserById,
    getReviewsByUserId
}