const DBHelper = require('../DBHelper');

module.exports = async function (context, req) {
    console.log(req);
    const insertQuery = `INSERT INTO Case(Exposure,Vaccinated,Symptoms,Continuous) Values (${req.body.exposure},${req.body.vaccinated},${req.body.symptoms},${req.body.continuous})`
    console.log(insertQuery);
    const NewResult = (req,res) => new Promise((resolve,reject) => {
    DBHelper.query(insertQuery, (error, results) => {
    if(error){
      reject(error)
    }
    resolve(returnData(200, {
      status: '200',
      requestTime: req.requestTime,
      data: results,
    }));
  });
  })
  result = await NewResult(req,context);
  console.log(result);
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}