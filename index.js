var express = require('express');
var router = express.Router();
var MySql = require('sync-mysql');
var connection_info = require("../modules/connection_info")




router.get('/', function(req, res, next) {
  var connection = new MySql({
    user: connection_info.user,
    password: connection_info.password,
    host: connection_info.host,
    database: connection_info.database
  })
  var crop_activity = connection.query('select * from field inner join crop_activity on field.field_id = crop_activity.field_id;')

  res.render('index', { title: 'Field Crop Activity List', crop_activity: crop_activity, page_header: '', link: '' });
});




module.exports = router;
