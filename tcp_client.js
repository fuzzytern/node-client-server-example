const net = require('net');
const sock = new net.Socket;

sock.setEncoding('utf-8');

sock.on('connect', () => {
  console.log('connected to %j', sock.address());
  sock.write('GET /en/ HTTP/1.1 \r\n');
  sock.write('Host: 127.0.0.1');
  sock.write('\r\n\r\n');
});

sock.on('data', (data) => {
  console.log('Server says:', data);
});

sock.on('end', (data) => {
});

sock.on('error', (err) => {
  console.log('An error occured:', err);
});

sock.connect('9000');
