'use strict'

const bodyParser = require('body-parser');
const helmet = require('helmet');

module.exports = {
    initExpress: initExpress
}
console.log('express')
function initExpress(app) {
    //helmet modules
    // app.use(helmet())
    //end helmet
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    app.use(function (req, res, next) {
        console.log('here')
        req.resources = req.resources || {}
        next()
    })
}