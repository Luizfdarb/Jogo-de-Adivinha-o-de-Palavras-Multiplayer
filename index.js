const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const http = require('http')

const {Server} = require('socket.io')
const server = http.createServer(app)

const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})