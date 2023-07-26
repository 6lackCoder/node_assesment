const express = require('express')
const app = express()
const {router} = require('./routes/routes')

app.set('view engine', 'ejs')
app.use('/', router)

app.listen(8080, ()=>{
    console.log('Server is running')
})