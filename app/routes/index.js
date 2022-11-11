const usr_c = require('../controllers/usr_c');

module.exports = function(app) {

  app.get('/', function(req,res,next) {
    //res.render('usr',{req:req});
    res.render('home',{req:req});
  });

  
  // Cad. de usuários
  app.get(['/usr'], function(req,res,next) {
    if (req.query.act) {
      usr_c.selectact(req,res);
    } else {
      usr_c.main(req,res);
    }
  });

  app.post('/usr', function(req,res,next) {
    usr_c.action(req,res);
  });

}