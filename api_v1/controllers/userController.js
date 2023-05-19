const UserService = require('../services/userService')

const userService = new UserService()

class UserController {
    static async create(req, res) {
        const { name, email, enable } = req.body

        try {
            const user = await userService.create({ name, email, enable})
    
            res.status(201).send(user)
        } catch (error) {
            res.status(400).send({ message: error.message})
        }

    }

    static async searchAll(req, res) {
        const users = await userService.searchAll()

        res.status(200).json(users)
    }

    static async searchById(req, res) {
        try {
            const { id } = req.params
            const user = await userService.searchById(id)

            res.status(200).json(user)
        } catch (error) {
            res.status(400).send({ message: error.message }) 
        }
    }

    static async edit(req, res) {
        const { id } = req.params
        const { name, email, enable } = req.body

        try {
            const user = await userService.edit({ id, name, email, enable })

            res.status(200).json(user)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

}

module.exports = UserController