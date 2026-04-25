// Load secrets from the .env file
require("dotenv").config();

const NODE_ENV = process.env.NODE_ENV;
const API_KEY  = process.env.API_KEY;

// Print the "secrets" so we can see them when the app runs
console.log("NODE_ENV:", NODE_ENV);
console.log("API_KEY :", API_KEY);


// Secrete Key Check:
// Warn then Stop the app if either key is missing. 
if (!API_KEY || !NODE_ENV) {
  console.error("ERROR: You Need Keys To Run This App");
  // exit with a non-zero code to signal failure
  process.exit(1); 
}


// Http Server
    const http = require("http");
    const hostname = "127.0.0.1"
    const port = 3000;

    // File System to see the files
    const fs = require("fs")
    let directory_name = "./"  // To get files of this current directory
    // Go ahead and read all the files in the directory and snyc from the latest and use the directory name from above.
    let filesnames = fs.readdirSync(directory_name)

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");

        let body = "";
        body += "Environment: " + NODE_ENV + "\n";
        body += "API Key    : " + API_KEY + "\n";
        body += "-----------------------------\n";

        // In development, show the file listing; otherwise hide it
        if (NODE_ENV === "development") {
            body += "Files in directory:\n";
            filesnames.forEach((file) => {
                body += " - " + file + "\n";
            });
        } else {
            body += "(file listing hidden in non-development environment)\n";
        }



    res.end(body);
    });


// Start Server - with self calling function ()=>{}
server.listen(port, hostname, ()=>{})
