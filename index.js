require('dotenv').config()
const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('welcome')  ;
})

app.get('/try',(req,res) => {
    res.send("hahahahhahhhhhhhhhhhhhhh")
})

app.listen(process.env.PORT , () => {
    console.log(`server started ${process.env.PORT}`);
    
    
})