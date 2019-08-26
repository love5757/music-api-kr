var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var http = require('http')
var createError = require('http-errors')
var logger = require('morgan')
var cors = require('cors')

var app = express()

app.set('port', process.env.PORT || 5000)

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(cors())

const v1 = require('./routes/v1/v1')
app.use('/v1', v1)

app.use(function (req, res, next) {
  // next(createError(404))
  next(res.json({
    code: 404,
    v: 'v1',
    status: 'ERR_NOTFOUND'
  }))
})

app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  // res.render('error')
  res.json({
    code: 500,
    v: 'v1',
    status: 'ERR_SERVER'
  })
}) 
