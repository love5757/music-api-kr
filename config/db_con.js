var mysql = require('mysql')
var config = require('./db_config').real

module.exports = function () {
  return {
    init: function () {
      return connection;
    },
    test_open: function (con) {
      con.connect(function (err) {
        if (err) {
          console.error('mysql connection error :' + err);
        } else {
          console.info('mysql is connected successfully.');
        }
      })
    }
  }
};

var connection = mysql.createConnection({
  host: config.host,
  port: config.port,
  user: config.user,
  password: config.password,
  database: config.database
});
connection.connect(function(err) {
  if (err) throw err
}); 
