'use strict'
const Mongoose = require("mongoose")
const config = require('./index')
const mongoose = require('mongoose')

module.exports = {
    initMongoose: initMongoose
};

function initMongoose () {
    Mongoose.connect(config.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db = mongoose.connection
    db.on('error', function () {
        console.log("db error")
    })
    db.on('open', function () {
        console.log("db connected")
    })
}