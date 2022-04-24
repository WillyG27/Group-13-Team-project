var express = require('express');
var router = express.Router();
var mysql=require('mysql');



/* GET home page.
router.get('/field', function(req, res, next) {
  res.render('field');
});
*/

 //testing db connection
/*
 var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'arable_land_manager'
 });
 con.connect(function(err){
    if(err){
      console.log(err);
    }
    else{
     con.query("SELECT * FROM field " ,function(err,result){
          var that=result;
          if (err) {
              console.log(err);
          }
          else {
              console.log(that);
              console.log('this done')
          }
      })
      }
 });
*/



//display info

router.get('/field', function(req, res, next) {
  var con=mysql.createConnection({
     host:'localhost',
     user:'root',
     password:'',
     database:'arable_land_manager'
  });
  con.connect(function(err){
     if(err){
       console.log(err);
     }
     else{

       con.query("SELECT * FROM field ",function(err,result){

         var field=result;

              console.log('contact');
              console.log(field);
               res.render('field',{field:field});

        });
      }
  });
});



//edit info
router.get('/edit',function(req,res){
    var field_id=req.query.field_id
    console.log(field_id);


    var con=mysql.createConnection({
       host:'localhost',
       user:'root',
       password:'',
       database:'arable_land_manager'
    });

    con.connect(function(err){
       if(err){
         console.log(err);
       }
       else{

         con.query("SELECT * FROM field ",function(err,result){

           var field=result;

                console.log('contact');
                console.log(field);

                res.render("edit",{field_id:field_id, field:field});



          });
        }

    });


});

router.post('/edit', function(req,res,next){
  var field_id=req.body.field_id;
  var size=req.body.size;
  var soil_type=req.body.soil_type;

    var con=mysql.createConnection({
       host:'localhost',
       user:'root',
       password:'',
       database:'arable_land_manager'
    });




         con.query("UPDATE field SET size=(?) ,soil_type=(?) WHERE field_id=(?)",[size, soil_type, field_id]);

         con.query("SELECT * FROM field ",function(err,result){

           var field=result;
         res.render('field', {field:field});
         });

        });




//remove info
router.post("/delete", function(req,res,next){
  var con=mysql.createConnection({
     host:'localhost',
     user:'root',
     password:'',
     database:'arable_land_manager'
  });

  var delete_id =req.body.field_id;
  console.log(delete_id);
  con.query("DELETE from field where field_id=(?);",[delete_id]);

  con.query("SELECT * FROM field ",function(err,result){

    var field=result;
  res.render('field', {field:field});
});
});

module.exports = router;




