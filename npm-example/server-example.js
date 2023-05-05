const http = require('http');
 
const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hello, world!');
        response.end();
    } else if (request.url === '/secret') {
            response.write('congratulations youve found the secret page ');
            response.end();
      } else {
        response.statusCode = 404;
        response.write('404 Page');
        response.end();
      }
    });
 
server.listen(3000);