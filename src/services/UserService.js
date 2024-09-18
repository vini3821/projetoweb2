//UserService.js
const User = require('../models/User')//Grupo 1

process.on('uncaughtException', (error) => {//Grupo 1
    console.error(`Uncaught Exception: ${error}`)
})

const UserService = {
  getAllUsers: async () => {//Grupo 1
    return await User.find() // ou User.findAll() para Sequelize
  },

  getUserById: async (id) => {//Grupo 1
    return await User.findById(id) // ou User.findByPk(id) para Sequelize
  },

  createUser: async (userData) => {//Grupo 1
    const user = new User(userData)
    return await user.save() // ou User.create(userData) para Sequelize
  },

  updateUser: async (id, userData) => {//Grupo 1
    return await User.findByIdAndUpdate(id, userData, { new: true }) // ou User.update(userData, { where: { id } }) para Sequelize
  },

  deleteUser: async (id) => {//Grupo 1
    return await User.findByIdAndDelete(id) // ou User.destroy({ where: { id } }) para Sequelize
  }
}

module.exports = UserService//Grupo 1