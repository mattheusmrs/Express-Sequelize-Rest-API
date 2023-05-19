const database = require('../models')
const { sign } = require('jsonwebtoken')
const jsonSecret = require('../config/jsonSecret')

class AuthService {
    async requestCode(dto) {

        const user = await database.user.findOne({
            attributes: ['id', 'email'],
            where: {
                email: dto.email
            }
        })

        if (!user) {
            throw new Error('Usuario não cadastrado')
        }

        throw new Error ('Implementar requestCode')

    }

    async confirmCode(dto) {

        throw new Error ('Implementar tabela de códigos de autenticação.')

        const accessToken = sign({
            email: user.email
        }, jsonSecret.secret, {
            expiresIn: 14400
        })

        return { accessToken }
        
    }
}

module.exports = AuthService