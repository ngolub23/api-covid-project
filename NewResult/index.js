const DBHelper = require('../DBHelper');

module.exports = async function (context, req) {
    const positiveNegative = 0;
    if(req.body.positive)
    {
        positiveNegative = 1;
    }
    if(req.body.negative)
    {
        positiveNegative = 0;
    }
    const insertQuery = `INSERT INTO Result(PositiveNegative) VALUES (${positiveNegative})`;
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