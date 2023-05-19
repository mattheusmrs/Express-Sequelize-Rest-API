const database = require('../models')
const { hash } = require('bcryptjs')
const uuid = require('uuid')

class UserService {
    async create(dto) {
        const user = await database.user.findOne({
            where: {
                email: dto.email
            }
        })

        if (user) {
            throw new Error('Usuario ja cadastrado')
        }

        try { 
    
            const newUser = await database.user.create({
                id: uuid.v4(),
                name: dto.name,
                email: dto.email,
                enable: dto.enable
            })
    
            return newUser
        } catch (error) {
            throw new Error('Erro ao cadastrar usuário')
        }


    }

    async searchAll() {
        const users = await database.user.findAll()

        return users
    }

    async searchById(id) {
        const user = await database.user.findOne({
            where: {
                id: id
            }
        })

        if (!user) {
            throw new Error('Usuário informado não cadastrado!')
        }

        return user
    }

    async edit(dto) {
        const user = await this.searchById(dto.id)

        try {
            user.name = dto.name
            user.email = dto.email
            user.enable = dto.enable

            await user.save()

            return user
        } catch (error) {
            throw new Error('Erro ao editar usuário!')
        }
    }

}

module.exports = UserService