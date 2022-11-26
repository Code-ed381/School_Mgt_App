const mysql = require('mysql');

module.exports =  mysql.createConnection({
    host: "localhost",
    user: "root",
    database: 'sch_mgt_db',
    multipleStatements: true
});
  

