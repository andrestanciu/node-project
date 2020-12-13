'use strict'
const Song = require('../models/songs')

module.exports  = {
    getSongs: getSongs,
    createSong: createSong,
    deleteSongById: deleteSongById,
    updateSongById: updateSongById,
    responseToJSON: responseToJSON
}

function getSongs (req, res, next) {
    Song.find(function(err, result) {
        if(err) {
            return res.json(err)
        }
        req.resources.songs = result
        return next()
    })
}

function createSong(req, res, next) {
    const addSong = req.body
    const song = new Song(addSong)
    song.save(function (err, result) {
        if(err) {
            return res.json(err)
        }
        req.resources.newSong = result
        return next()
    });
}

function deleteSongById (req, res, next) {
    Song.deleteOne({_id: req.body.id}, function(err, result) {
        if(err) {
            return res.json(err)
        }
        req.resources.songs = result
        return next()
    })
}


function updateSongById (req, res, next) {
    Song.findByIdAndUpdate({_id: req.body.id}, req.body, function(err, result) {
        if(err) {
            return res.json(err)
        }
        req.resources.songs = result
        return next()
    });
}

function responseToJSON (prop) {
    return function (req, res, next) {
        return res.json(req.resources[prop])
    }
}