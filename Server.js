// Server.js
const reflect_metadata = require('reflect-metadata')//Grupo 1
const dotenv = require('dotenv')//Grupo 1
dotenv.config()//Grupo 1
const express = require('express')//Grupo 1
const cors = require('cors')//Grupo 1
const userRoutes = require('./src/routes/UserRoutes')//Grupo 1

process.on('uncaughtException', (error) => {//Grupo 1
    console.error(`Uncaught Exception: ${error}`)
})

const app = express()//Grupo 1

const port = process.env.PORT || 3000//Grupo 1


app.use(//Grupo 1
    cors({
        origin: "*",
        credentials: true,
        allowedHeaders:
            "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Origin",
        methods: ["GET", "POST", "PUT", "DELETE"],
    }) 
)

app.use(express.json())//Grupo 1

app.use('/users', userRoutes)//Grupo 1


app.listen(port, () => {//Grupo 1
    try  {
        console.log(`Server running ON: http://localhost:${port}/`)
    } catch(error) {
        console.error(`ERROR Listen Server: ${error}`)
    }
})

module.exports = {//Grupo 1
    app,
}