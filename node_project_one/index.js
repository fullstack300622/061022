const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();

app.use(cookieParser())

app.get('/', (req, res) => {
    // console.log('req :',req)
    console.log(req.cookies)
    // console.log('hello world')
    // res.send('hello I am from backend')    
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/shop', (req, res) => {
    // console.log('hello world')
    // res.send('hello I am from shop')
    res.sendFile(__dirname + '/views/shop.html')
})



app.listen(5000);