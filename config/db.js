var con = require('mssql');
require('dotenv').config();

var config = {
  
  server: process.env.DB_SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DBASE,
  port: parseInt(process.env.DB_PORT),

  options: {
    rowCollectionOnDone: true, // Only get row set instead of row by row
    useColumnNames: true, // For easier JSON formatting
    //encrypt: true, // Necessário no Azure
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
}


// Select, Update, Insert, Delete
const query = (sql, callback) => {
  new con.ConnectionPool(config).connect().then(pool => {
    return pool.request().query(sql)
  }).then(result => {
    //console.log(result)
    let rows = result.recordset;
    let updt = result.rowsAffected;
    if(rows){ //select
      callback(rows);
    }else{    //update,insert
      callback(updt);
    }
  }).catch(err => {
    callback({err: 'Erro. '+err});
    console.log({err});
  });
};


module.exports = {
  query
};