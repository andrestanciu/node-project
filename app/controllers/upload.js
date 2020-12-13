'use strict'

const multer = require('multer')
const config = require('../../config/index')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, config.uploadPath)
    },

    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

let upload = multer({ storage: storage })

module.exports  = {
    storage: storage,
    upload: upload
};