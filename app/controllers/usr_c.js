var objModel = require('../models/usr_m');
var obj = 'usr';

exports.main = function(req,res){
  objModel.list(req, function(dados){
    res.render(obj,{req:req, dados:dados});
  });
};

exports.selectact = function(req,res){
  if(req.query.act == 'INC'){
    res.render(obj,{req:req});
  }else if(req.query.act == 'ALT' || req.query.act == 'EXC'){
    objModel.select(req, function(dados){
      res.render(obj,{req:req, dados:dados, errquery:dados.err});
    });
  }
};

exports.action = function(req,res){
  if(req.body.act=='GRI'){
    objModel.insert(req, function(dados){
      //req.flash('msgact', respact(req.body.act,dados));
      res.redirect('/'+obj);
    });
  }else if(req.body.act=='GRA'){
    objModel.update(req, function(dados){
      //req.flash('msgact', respact(req.body.act,dados));
      res.redirect('/'+obj);
    });
  }else if(req.body.act=='GRE'){
    objModel.delete(req, function(dados){
      //req.flash('msgact', respact(req.body.act,dados));
      res.redirect('/'+obj);
    });
  }else{
    //req.flash('msgact', 'Ação não definida');
    res.redirect('/'+obj);
  }
};