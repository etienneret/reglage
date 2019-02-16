
var mysql = require ('mysql');


// var connection = mysql.createConnection({
//   host     : process.env.HOST,
//   user     : process.env.USER,
//   password : process.env.PASSWORD,
//   database : process.env.DATABASE
// });


var connection = mysql.createConnection({
  host     : 'remotemysql.com',
  user     : '7lhYHaQIHM',
  password : 'wCVu4fmbO1',
  database : '7lhYHaQIHM'
});


module.exports = {
  connection: connection
};

