This project is called "Log-All-The-Things" for module NODE101.

The goal of this project was to accomplish the following:

Every request to your server must be logged to the console
Every request to your server must be logged to a file
The log file is named log.csv and must be csv format
Must use fs.appendFile, do not use fs.appendFileSync
Expose an endpoint (does not require authentication) http://localhost:3000/logs that will return a json object with all the logs

How to Demo this project:

Clone the repository locally to your computer. Open up the project in Visual Studio Code. Open up Terminal, run the command "npm test" //This will run a set of tests inside the Terminal to see whether or not the requests to the server will be logged to the console and log CSV file. Then once the requests have been logged to a file, that information will get stored into a JSON object. Once the tests are ran successfully, simply close out the project.