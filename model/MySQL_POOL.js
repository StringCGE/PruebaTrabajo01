const mysql = require('mysql');
const pool = mysql.createPool({
    host:      process.env.MYSQL_HOST,
    user:      process.env.MYSQL_USER,
    password:  process.env.MYSQL_PSW,
    database:  process.env.MYSQL_DATABASE
});

const ejecutar = function(query, _result){
    pool.getConnection((err, connection)=>{
        if (err) _result(err, null);
        connection.query(query,
            (err, result)=>{
                if (err) _result(err, null);
                _result(null, result);
                connection.release();
            }
        );
    });
}

module.exports.ejecutar = ejecutar;
module.exports.pool = pool;
module.exports.mysql = mysql;