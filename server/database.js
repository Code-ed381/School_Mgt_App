var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

module.exports = {
    query: function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "CREATE TABLE customers (username VARCHAR(255), email VARCHAR(255) NOT NULL, passsword VARCHAR(255) NOT NULL, CONSTRAINT PK_sch_mgt_db PRIMARY KEY (email, passsword)";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table created");
        });
        }
}
