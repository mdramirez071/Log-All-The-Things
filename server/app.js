const express = require('express');
//const http = require('http');
const fs = require('fs');
const app = express();
const { Console } = require('console');
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// Custom simple logger
const logger = new Console({ stdout: output, stderr: errorOutput });
// use it like console

const dataArray = [];
// In stdout.log: count 5


app.use((req, res, next) => {
// write your logging code here
//res.status(200).send("ok");
// fs.send(log.csv)
//logger.info(console.log);
//Grabs the User Agent
var userGetData = req.get("User-agent");
dataArray.push(userGetData);
logger.log(userGetData);

//Grabs the Date/Time
var DateTime = new Date();
var formatTime = DateTime.toISOString();
dataArray.push(formatTime);
logger.log(formatTime);

//Grabs the Method (GET, POST, DELETE, etc.)
var Method = req.method;
dataArray.push(Method);
logger.log(Method);

//Grabs the Resource
var Resource = req.url;
dataArray.push(Resource);
logger.log(Resource);
//Grabs the HTTP Version

var httpVer = req.httpVersion;
dataArray.push(httpVer);
logger.log(httpVer);

//Grabs the Status Code
var status = res.statusCode;
dataArray.push(status);
logger.log(status);

//logs the full array of initialData
logger.log(dataArray);

let newArrayofStr = dataArray.join(',');
let newArray = "\n" + newArrayofStr
fs.appendFile("log.csv", newArray, (err) => {
    if (err) throw err;
    console.log('The data has been appended to the log CSV file!');
  });
 next();
});


app.get('/', (req, res) => {
// write your code to respond "ok" here
// const count = 5;
// logger.log(count);
res.status(200).send("ok");

});

app.get('/logs', (req, res) => {
// write your code to return a json object containing the log data here
// const count = 4;
// logger.log(count);
res.status(200).send('logsss for daysss');
});

module.exports = app;
