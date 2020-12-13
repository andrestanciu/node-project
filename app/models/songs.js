'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const songSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String
    }
})

module.exports = mongoose.model('song', songSchema, 'songs')