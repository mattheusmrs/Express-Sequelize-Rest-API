const AuthService = require('../services/authService')

const authService = new AuthService()

class AuthController {
    static async requestCode(req, res) {
        const { email } = req.body

        try {
            await authService.requestCode({ email })

            res.status(200).send({ message: 'Código enviado com sucesso!' })
        } catch (error) {
            res.status(401).send({ message: error.message })
        }

    }

    static async confirmCode(req, res) {
        const { code } = req.body

        try {
            let accessToken = await authService.confirmCode({ code })

            res.status(200).send({ accessToken })

        } catch (error) {
            res.status(401).send({ message: error.message })
        }

    }

}

module.exports = AuthController