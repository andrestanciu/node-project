'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    createdAt: Number,
    updatedAt: Number,
    name: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    details: {
        age: {
            type: Number,
            required: false,
            unique: false
        },
        role: {
            type: String,
            required: false,
            unique: false
        }
    },
    documents: [
        {
            name: {
                type: String
            },
            doctype: {
                type: String
            }
        }
    ]

}, { // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: { currentTime: () => new Date().getTime() }
});

module.exports = mongoose.model('user', userSchema, 'users')