// var mysql_dbc = require('../../config/db_con')()
// var connection = mysql_dbc.init()
const async = require('async')
const MELON = require('../util/melon/music')
require('dotenv').config()

const getMelonTop100 = function (req, res) {
  MELON.getData()
    .then(result => {
      res.json(result)
    })
}

module.exports.getMelonTop100 = getMelonTop100

const getMelonTop100Exo = function (req, res) {
  MELON.getDataExo()
    .then(result => {
      res.json(result)
    })
}

module.exports.getMelonTop100Exo = getMelonTop100Exo
