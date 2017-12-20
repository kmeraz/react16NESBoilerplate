// Vendor
import express from 'express';
import http from 'http';
import socketIO from 'socket.io';

const app  = express();
const server = http.Server(app);
const io = socketIO(server);
const PORT = 8080;
server.listen(PORT);
console.log('NES server listening on port ', PORT);

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
