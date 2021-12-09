const DBHelper = require('../DBHelper');

module.exports = async function (context, req) {
    var responseMessage = "Login Does not Exist"
    var token = "success"
    //const login = 1;
    console.log(req);
    //const login = DBHelper.query(`Select Count(*) From User Where UserName = ${req.body.userName} AND Password = ${req.body.password}`)
    //console.log(login);
    
    
        responseMessage = "Login Successful" 
        context.res = {
            status: 200, 
            body: {token}
            
        };
}
   
    
    