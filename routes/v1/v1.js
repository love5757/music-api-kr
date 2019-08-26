const express = require('express')
const router = express.Router()

const API = require('./api')

router.get('/', function (req, res) {
  res.json({ code: 200, v: 'v1', status: 'OK' })
})

router.get('/melon/music/chart/100', function (req, res) {
  API.getMusicByArtist(req, res)
})

module.exports = router
