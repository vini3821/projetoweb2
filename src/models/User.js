// User.js
const { DataTypes } = require('sequelize')//Grupo 1
//const sequelize = require('../config/database')//a fazer

process.on('uncaughtException', (error) => {//Grupo 1
    console.error(`Uncaught Exception: ${error}`)
})

const User = sequelize.define('User', {//Grupo 1
  name: { type: DataTypes.STRING, allowNull: true },
  email: { type: DataTypes.STRING, allowNull: true, unique: true, validate: { is: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }},
  phone: { type: DataTypes.STRING, allowNull: true, validate: { is: /^\d{3}-\d{3}-\d{4}$/ }},
  birthdate: { type: DataTypes.DATEONLY, allowNull: true }
})

module.exports = User//Grupo 1