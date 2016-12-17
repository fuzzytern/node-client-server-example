const net = require('net');

// Handles the connection to the socket
const handleConnection = conn => {
  const clientAddr = conn.remoteAddress + ':' + conn.remotePort;
  conn.setEncoding('utf-8');

  console.log('New connection from %s', clientAddr);

  conn.on('data', (data) => {
    console.log(data);
    conn.write(`I got your message: ${data}`);
  });
}

const server = net.createServer();
server.on('connection', handleConnection);

server.listen('9000', () => {
  console.log('The server is listening to %j', server.address());
});
