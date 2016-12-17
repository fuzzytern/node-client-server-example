const net = require('net');
const client = new net.Socket;

client.setEncoding('utf-8');

client.connect('9000', () => {
  console.log('connected to %j', client.address());
  client.write('Hello from the client');
});

client.on('data', (data) => {
  console.log('Server says:', data);
});

