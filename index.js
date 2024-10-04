require('dotenv').config()
const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.sendFile('hello boisssssss')
})

app.get('/try',(req,res) => {
    res.send("<h1>fdhgdhghfghfghfgh</h1>")
})

app.listen(process.env.PORT , () => {
    console.log(`server started ${process.env.PORT}`);
    
    
})