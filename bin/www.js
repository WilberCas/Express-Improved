const app = require('../app');
const http = require('http');
const port = 3999;
const server = http.createServer(app);

app.set('port', port );

server.listen(port);

server.on('error', (error) =>{
    if (error.syscall !== 'listen') {
        throw error;
      }
    
      // handle specific listen errors with friendly messages
      switch (error.code) {
        case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
          break;
        default:
          throw error;
      }
});
