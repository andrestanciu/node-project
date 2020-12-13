'use strict'

const express = require('express')
const router = express.Router()
const songsController = require('../controllers/songs')

router.get('/songs',
    songsController.getSongs,
    songsController.responseToJSON('songs')
);
router.post('/songs',
    songsController.createSong,
    songsController.responseToJSON('newSong')
);
router.delete('/songs',
    songsController.deleteSongById,
    songsController.responseToJSON('songs')
);
router.put('/songs',
    songsController.updateSongById,
    songsController.responseToJSON('songs')
);
module.exports = router;