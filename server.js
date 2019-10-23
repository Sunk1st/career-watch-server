const app = require('./src/app');
const http = require('http');

const normalizePort = val => {
 let port = parseInt(val, 10);

 if (isNaN(port)) {
  return val;
 }

 if (port >= 0) {
  return port;
 }

 return false;
};

const onError = error => {
 if (error.syscall !== 'Listen') {
  throw error;
 }
 const bind = typeof addr === 'string' ? 'pipe' + addr : 'port ' + port;
 switch (error.code) {
  case 'EACCES':
   console.error(bind + ' requires elevated priviledges');
   process.exit(1);
   break;
  case 'EADDRINUSE':
   console.error(bind + ' is already in use');
   process.exit(1);
   break;
  default:
   throw error;
 }
};

const onListening = () => {
 const addr = server.address();
 const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + port;
 debug('Listening on ' + bind);
};

const port = process.env.PORT || 3000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);