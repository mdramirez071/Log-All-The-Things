const express = require('express');
const fs = require('fs');
const app = express();

const dataArray = [];


app.use((req, res, next) => {
//Grabs the User Agent
var userGetData = req.get("User-agent");
var newUserData = '"' + userGetData + '"';
dataArray.push(newUserData);

//Grabs the Date/Time
var DateTime = new Date();
var formatTime = DateTime.toISOString();
dataArray.push(formatTime);

//Grabs the Method (GET, POST, DELETE, etc.)
var Method = req.method;
dataArray.push(Method);

//Grabs the Resource
var Resource = req.url;
dataArray.push(Resource);

//Grabs the HTTP Version
var httpVer = req.httpVersion;
dataArray.push("HTTP/" + httpVer);

//Grabs the Status Code
var status = res.statusCode;
dataArray.push(status);

let newArrayofStr = dataArray.join(',');
let breakLineOnArr = newArrayofStr + "\n";

fs.appendFile("/tmp/log.csv", breakLineOnArr, (err) => {
    if (err) throw err;
    console.log('The data has been appended to the log CSV file!');
  });
function emptyTheArray(){
  dataArray.length = 0;
}
emptyTheArray();

 next();
});


app.get('/', (req, res) => {
// write your code to respond "ok" here
res.status(200).send("ok");

});

app.get('/logs', (req, res) => {
// write your code to return a json object containing the log data here
const csvFilePath='/Users/admin/projects/node101-log-all-the-things/tmp/log.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
res.status(200).send(jsonObj);
})
});

module.exports = app;
