const express = require('express')

router = express.Router();

router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/route2', (req, res)=>{
    res.render('route2')
})

router.post('/route3', (req, res)=>{
    res.json({
        name: 'Mustapha'
    })
})

module.exports.router = router