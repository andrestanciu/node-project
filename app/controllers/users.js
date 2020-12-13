'use strict'
const User = require('../models/users')

module.exports  = {
    isAdmin: isAdmin,
    getUsers: getUsers,
    getUsersById: getUsersById,
    createUser: createUser,
    deleteUsersById: deleteUsersById,
    responseToJSON: responseToJSON
}

function isAdmin (req, res, next) {
    const isAdminVal = true
    if(!isAdminVal) {
        return res.json({err: "unauthorized"})
    }
    next()
}
function getUsers (req, res, next) {
    User.find(function(err, result) {
        if(err) {
            return res.json(err)
        }
        req.resources.users = result
        return next()
    })
}
function getUsersById (req, res, next) {
    User.find({_id: req.body.id}, function(err, result) {
        if(err) {
            return res.json(err)
        }
        req.resources.users = result
        return next()
    })
}
function createUser(req, res, next) {
    const addUser = req.body;

    addUser.details = JSON.parse(addUser.details)
    addUser.documents = JSON.parse(addUser.documents)

    const user = new User(addUser)
    user.save(function (err, result) {
        if(err) {
            return next({statusCode: 401, message: err})
        }

        req.resources.newUser = result
        return next()
    })
}

function deleteUsersById (req, res, next) {
    User.deleteOne({_id: req.body.id}, function(err, result) {
        if(err) {
            return res.json(err)
        }
        req.resources.users = result
        return next()
    });
}

function responseToJSON (prop) {
    return function (req, res, next) {
        return res.json(req.resources[prop])
    }
}