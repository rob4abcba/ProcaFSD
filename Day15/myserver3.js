myserver.js -
// include any libraries that are needed
let http = require('http');

// use those libraries and create a server
 let server = http.createServer(
        function(req,res){
                // get the request, send a response
                //200 -- success code
                //console.log(res);            
                res.statusCode=200;
                //content type text/html
                res.setHeader('Content-Type','text/plain')
res.statusMessage = ' status from server!';
                //end the response
                res.end('response ending from server');

        }
 )
//make sure server is listening at a port. 
server.listen(3002,() => { console.log(' server is listening at port 3002')});
myserv.js----
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
Teacher Procareer310:01 PM
case '/contactus.html':  
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