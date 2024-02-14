const express = require('express');
const WebSocket = require('ws');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
// Function to setup WebSocket
function setupWebSocket(server) {
  wss.on('connection', function connection(ws) {
    console.log('A client connected');
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
      ws.send(`Echo: ${message}`); // Echo back the received message
    });
  });
}
// Call setupWebSocket
setupWebSocket(server);
// Serve an HTML page with WebSocket client code
app.get('/websocket', (req, res) => {
  res.sendFile(__dirname + '/websocket.html');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
