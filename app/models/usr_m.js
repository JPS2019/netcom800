con = require('../../config/db');

exports.list = function(req, rows){
  var SQL = "SELECT USR_ID, USR_NOME "
  SQL += "FROM S800USR WHERE USR_DEL = 0 "
  SQL += "ORDER BY USR_ID"
  return con.query(SQL, rows);
};

exports.select = function(req, rows){
  return con.query('SELECT * FROM S800USR WHERE USR_ID = '+ req.query.cod, rows);
};

exports.insert = function(req, rows){
  var SQL = "Begin Try Begin Transaction "
  SQL += "Declare @num int; "
  SQL += "Set @num = (SELECT ISNULL(MAX(USR_ID),99)+1 FROM S800USR); "
  SQL += "INSERT INTO S800USR (USR_ID, USR_NOME, USR_DEL) "
  SQL += "VALUES (@num, '"+ req.body.USR_NOME +"', 0) "
  SQL += "Commit End Try Begin Catch If @@TRANCOUNT > 0 Rollback End Catch"
  return con.query(SQL, rows);
};

exports.update = function(req, rows){
  var SQL = "UPDATE S800USR SET USR_NOME = '" + req.body.USR_NOME + "' "
  SQL += "WHERE USR_ID = " + req.body.USR_ID
  return con.query(SQL, rows);
};

exports.delete = function(req, rows){
  return con.query("UPDATE S800USR SET USR_DEL = 1 WHERE USR_ID = " + req.body.USR_ID, rows);
};