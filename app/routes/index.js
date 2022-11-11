const usr_c = require('../controllers/usr_c');
const { insert } = require('../models/usr_m');

module.exports = function(app) {
  
  app.get('/', function(req,res,next) {
    //res.render('usr',{req:req});
    usr_c.main(req,res);
  });


  app.post('/', function(req,res,next) {
    usr_c.action(req,res)   
  });

}