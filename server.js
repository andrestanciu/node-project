'use strict'
const express = require('express');
const app = express();
//NODE_ENV=production node server.js
// const config = require('./config/index')
require('./config/mongoose').initMongoose()
require('./config/express').initExpress(app)
require('./config/routes').initRoutes(app)

// const db = mongoose.connection;
// db.on('error', function() {
//     console.log("error");
//     })
// db.once('open', function() {
//     console.log("connected");
//     })
app.all('*', function (req, res, next) {
    return res.json({test: 1})
    return res.status(404).json({
        status: 'fail',
        message: "can't find url"
    })
})

app.use(function (err, req, res, next) {
     return res.status(err && err.statusCode || 400).json({
        status: 'error',
        message: err && err.message || 'Default message'
    })
})

app.listen(3006, function () {
    console.log(`API on port 3006`)
})

// npm init
// npm i --save express
// restart automat
// npm i --save-dev nodemon
// nodemon server.js