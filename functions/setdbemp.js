module.exports = function(){
 
  // Conexão da empresa via Tedious
  this.conexaoTedious = function(emp) {
    var con = require('../config/db');
    return con;
  };
  

  return this;
};