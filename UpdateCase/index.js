const DBHelper = require('../DBHelper');


module.exports = async function (context, req) {
  var coughing = 0;
  var runny = 0;
  var tasteSmell = 0;
  var headache = 0;
  var nausea = 0;
  var fatigue = 0;
  var contributorId = 0;
  var caseId = 0;
  var soreThroat = 0
  if (req.body.coughing)
  {
    coughing = 1
  }
  if (req.body.soreThroat)
  {
    soreThroat = 1
  }
  if (req.body.runny)
  {
    runny = 1
  }
  if (req.body.tastSmell)
  {
    tastSmell = 1
  }
  if (req.body.headache)
  {
    headache = 1
  }
  if (req.body.nausea)
  {
    nausea = 1
  }
  if (req.body.fatigue)
  {
    fatigue = 1
  }
  if (req.body.contributorId)
  {
    contributorId = req.body.contributorId;
  }
  if (req.body.caseId)
  {
    caseId = req.body.caseId;
  }
  const returnData = (status, responseMessage) =>{
    return  {
    status: status,
    body: responseMessage
    }
  }
  const insertQuery = `INSERT INTO CaseSymptoms(Coughing,Runny,TasteSmell,Headache,Nausea,Fatigue,SoreThroat) VALUES (${coughing},${runny},${tasteSmell},${headache},${nausea},${fatigue},${soreThroat})`;
  console.log(insertQuery);
  const updateCase = (req,res) => new Promise((resolve,reject) => {
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
  result = await updateCase(req,context);
  console.log(result);
//     context.res = {
//         // status: 200, /* Defaults to 200 */
//         body: responseMessage
//     };
}