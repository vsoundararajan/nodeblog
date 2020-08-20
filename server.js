const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  console.log("blog version 1");
   // set header content type
   res.setHeader('content-type', 'text/html');
   let path = './views/';
   switch (req.url) {
     case "/":
       path += "index.html";
       res.statusCode = 200;
       break;
     case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
     case "/about-me":
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
     default:
       path += "404.html";
       res.statusCode = 404;
       break;
   }
   fs.readFile(path, (err, data) => {
     if (err) {
       console.log(err);
       res.end();
     } else {
       
       res.end(data);
     }
   });
});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});

