const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port =  process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New User connected');

		socket.emit('newMessage', {
			from: 'Chat App team',
			text: 'Welcome to our chat app',
			createdAt: 123
		});

		socket.on('createMessage', (message) => {
			message.createdAt = 225;
			console.log('createMessage: ',message);
		});

		socket.on('disconnect', () => {
		console.log('User Disconnnected');
	});
});



server.listen(port, () => {
	console.log(`server is up on port: ${port}`);
});





