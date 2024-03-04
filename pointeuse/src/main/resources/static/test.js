// test.js
const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080/ws');

ws.on('open', function open() {
  console.log('WebSocket connection established');

  // Send message to WebSocket endpoint
  ws.send('2'); // Assuming '1' is the id of the Pointeuse entity
});

ws.on('message', function incoming(data) {
  console.log('Received message:', data);
});

ws.on('close', function close() {
  console.log('WebSocket connection closed');
});
