var express = require("express");
var router = express.Router();
var MySql = require('sync-mysql');
var connection_info = require("../modules/connection_info")




router.get('/', function(req, res, next) {
  var connection = new MySql({
    host: connection_info.host,
    user: connection_info.user,
    password: connection_info.password,
    database: connection_info.database
  });
  var field = connection.query("SELECT * from field");
  console.log(field);

  //res.render('add_field', { title: 'Express', field:field });
  res.render('add_field');
});




router.get('/add', function(req, res, next){

  res.render('add_field')
})


router.post('/add', function(req, res, next) {
  var field_id = req.body.field_id
  var size = req.body.size
  var soil_type = req.body.soil_type
  //var soil_type = parseFloat(req.body.soil_type)
  var connection = new MySql({
    host: connection_info.host,
    user: connection_info.user,
    password: connection_info.password,
    database: connection_info.database
  })
  connection.query("INSERT INTO field (field_id, size, soil_type) VALUES ((?), (?), (?));", [field_id, size, soil_type]);

  res.redirect("/field");
})




module.exports = router;
