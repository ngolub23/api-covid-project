var  config = require('./dbconfig');
const  sql = require('mssql');


module.exports = async function (context, req) {
    con.connect(function(err) {
        if (err) throw err;
        var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });
      });
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}