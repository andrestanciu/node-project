'use strict'
const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')

router.get('/users',
    usersController.isAdmin,
    usersController.getUsers,
    usersController.responseToJSON('users')

)
router.get('/usersById',
    usersController.getUsersById,
    usersController.responseToJSON('users')
)
router.post('/users',
    usersController.createUser,
    usersController.responseToJSON('newUser')
)
router.put('/users',
    usersController.isAdmin,
    function(req, res, next) {

        return res.json({users: true});
    }
)
router.delete('/users',
    usersController.deleteUsersById,
    usersController.responseToJSON('users')
)
module.exports = router