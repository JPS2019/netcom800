const usr_c = require('../controllers/usr_c');

module.exports = function(app) {
  
  app.get('/usuario', function(req,res,next) {
    res.render('usr',{req:req});

  });






}