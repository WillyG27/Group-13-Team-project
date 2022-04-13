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
  var crop_activity = connection.query("SELECT * from crop_activity");
  console.log(crop_activity);

  //res.render('add_crop_activity', { title: 'Express', crop_activity:crop_activity });
  res.render('add_crop_activity');
});




router.get('/add', function(req, res, next){
  var connection = new MySql({
    user: connection_info.user,
    password: connection_info.password,
    host: connection_info.host,
    database: connection_info.database
  });
  var crop_activity = connection.query('select * from field;')

  res.render('add_crop_activity', { crop_activity: crop_activity} )
})


router.post('/add', function(req, res, next) {
  var start_date = req.body.start_date
  var crop = req.body.crop
  var field_id = req.body.field_id
  var connection = new MySql({
    host: connection_info.host,
    user: connection_info.user,
    password: connection_info.password,
    database: connection_info.database
  })
  connection.query("INSERT INTO crop_activity (start_date, crop, field_id) VALUES ((?), (?), (?));", [start_date, crop, field_id]);

  res.redirect("/crop_activity");
})




module.exports = router;