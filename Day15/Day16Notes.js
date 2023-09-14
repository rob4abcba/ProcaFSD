George Saito6:17 PM
https://github.com/gsaito2023/fsd-bootstrap/tree/main/exercise-14
A.V Nagireddy6:43 PM
To initialize and have package.json please do:
npm init
A.V Nagireddy6:45 PM
If you want to keep defaults and create package.json, then:
npm init -y
George Saito6:52 PM
thanks
Teacher Procareer37:05 PM
npm init
entry point : index.html
rest all are defaults ( keep pressing enter)
once done, you should a json text
press enter again
and you should see package.json created
npm i lite-server
Teacher Procareer37:07 PM
now let us add script to start the lite-server
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"lite-server"
  },
now at terminal -
npm start
Dana Chen7:09 PM
My webpage shows Cannot GET /
Teacher Procareer37:21 PM
https://github.com/javascriptbear/todo_react_app
download
extract
npm install
will take some time
npm start
Dana Chen7:23 PM
yes, it can work after changing the name
Samuel Aldama8:11 PM
i hve heard but dont know how to get started
You8:22 PM
package.json
Marja Katrina Centina (KC)8:41 PM
I'm not a fan of Angular
Nathaniel Ravelo8:42 PM
I tried learning Angular, but decided to learn React instead.
Teacher Procareer38:57 PM
react developer tools
Teacher Procareer39:00 PM
https://jscomplete.com/playground
Marja Katrina Centina (KC)9:14 PM
let ProButton = React.createElement("button", {}, "Procareer");
Samuel Aldama9:25 PM
can you enable the white board
Teacher Procareer39:28 PM
https://docs.google.com/document/d/1g7EKPcdueynVLImas3yCm9N7H5aBVRElldtSM-EEBI0/edit
Dana Chen9:32 PM
I have not finished the weather app yet.  I will work tonight and tomorrow. Can I have more time to work on it?
Dana Chen9:34 PM
yeah, that's what I think so ...
Marja Katrina Centina (KC)9:42 PM
Mine is so simple lol
George Saito9:45 PM
Thanks for that reminder.
Teacher Procareer39:45 PM
.gitignore file
add node_modules
to that file
then start git related commands
Teacher Procareer310:00 PM
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