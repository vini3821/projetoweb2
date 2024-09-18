// UserRoutes.js
const express = require('express')//Grupo 1
const router = express.Router()//Grupo 1
const UserController = require('../controllers/UserController')//Grupo 1

process.on('uncaughtException', (error) => {//Grupo 1
    console.error(`Uncaught Exception: ${error}`)
})

router.get('/', UserController.getAllUsers)//Grupo 1

router.get('/id', UserController.getUserById)//Grupo 1

router.post('/', UserController.createUser)//Grupo 1

router.put('/id', UserController.updateUser)//Grupo 1

router.delete('/id', UserController.deleteUser)//Grupo 1

module.exports = router//Grupo 1