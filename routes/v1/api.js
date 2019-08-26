// var mysql_dbc = require('../../config/db_con')()
// var connection = mysql_dbc.init()
const async = require('async')
const MELON = require('../util/melon/music')
require('dotenv').config()

const getMusicByArtist = function (req, res) {
  MELON.getData()
    .then(result => {
      res.json(result)
    })
}

module.exports.getMusicByArtist = getMusicByArtist
