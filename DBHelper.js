const sql = require("mssql");
require('dotenv').config({path: '.env'});
const config = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    multipleStatements: true,
    "options": {
        "enableArithAbort":true
    }
}
module.exports = {
    query: ((text,params, callback) => {
        return new sql.ConnectionPool(config).connect().then((pool) => {
            return pool.query(text,params,callback)
        })
    })
}