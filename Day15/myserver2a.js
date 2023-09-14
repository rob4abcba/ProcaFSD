// Include any libraries that are needed
let http = require("http");

// Use those libraries to create a server
let server = http.createServer(function (req, res) {
  //   console.log("res =", res); // WRONG: Too early to see effect of our statusCode & statusMessage assignments. To see all properties and methods of res object
  // get the request, send a response
  // Type res. <-- VSCode will show all methods for object res.
  //200 -- success code
  //   res.status(200); // WRONG! No method status to set property statusCode to 200
  res.statusCode = 200; // Assign value of 200 to property statusCode directly

  res.setHeader("Content-Type", "text/plain");
  //   res.setHeader("Content-Type", "text/html");
  //   res.statusMessage(" status from server!"); // WRONG!
  res.statusMessage = " status from server!"; // TODO: Where do we see this message??
  console.log("res =", res); // To see all properties and methods of res object //LAST: Only after hit refresh on Chrome tab with localhost:3002 do I see this console.log in my VSCode Terminal
  // End the response
  res.end("response ending from server"); //2ndToLAST: After click Chrome refresh, This msg shows on Chrome tab with localhost:3002.
});
// Make sure server is listening at a port.
server.listen(3002, () => {
  console.log("Yo2, Server is listening at port 3002"); //FIRST: see this on VSCode Terminal
});

// console.log("res =", res); // WRONG: res is no longer defined here

/*
// myserv.js----
var http = require('http');  
var url = require('url');  
var fs = require('fs');  
var server = http.createServer(function(request, response) {  
    var path = url.parse(request.url).pathname;  
    switch (path) {  
        case '/':  
            response.writeHead(200, {  
                'Content-Type': 'text/plain'  
            });  
            response.write("This is Test Message.");  
            response.end();  
            break;
case '/aboutus.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();


                    // Teacher Procareer310:01 PM
// case '/contactus.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();
default:  
            response.writeHead(404);  
            response.write("oops this doesn't exist - 404");  
            response.end();  
            break;  
    }  
});  
server.listen(3002);
*/
