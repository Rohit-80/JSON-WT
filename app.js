const express = require('express')
const notfound = require('./middleware/not-found')
require('express-async-errors')
require('dotenv').config()
const app = express()
const errorHandlerMiddleware = require('./middleware/error-handler')
const route = require('./Router/router')



app.use(express.static('./public'))
app.use(express.json())

// Route
app.use('/',route);

// Erros
app.use(notfound)
app.use(errorHandlerMiddleware);

// listen
const PORT = process.env.PORT || 3000
const start = async ()=> {
try {
    app.listen(3000, () => console.log(`server is listening on ${PORT}...`))    
} catch (error) {
    console.log(error)
}}

start()

