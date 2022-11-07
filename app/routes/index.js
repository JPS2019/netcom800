const usr_c = require('../controllers/usr_c');

module.exports = function(app) {
  
  app.get('/', function(req,res,next) {
    //res.render('usr',{req:req});
    usr_c.main(req,res);
  });


  app.post('/', function(req,res,next) {
    usr_c.action(req,res);
  });

}