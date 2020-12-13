'use strict'

const path = require('path')

module.exports = {
    initRoutes: initRoutes
}

function initRoutes(app) {
    const routesPath = path.join(__dirname, '../app/routes')
    const routes =['users', 'songs', "uploads"]

    routes.forEach(function (route) {
        app.use('/api',require(`${routesPath}/${route}`))
    })
}