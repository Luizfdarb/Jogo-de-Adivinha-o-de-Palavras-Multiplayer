const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const http = require('http')

const {Server} = require('socket.io')
const server = http.createServer(app)

const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

let players = []
let secretWord = "Amarelo"

io.on('connection', (socket) => {

    socket.on('search_player', (msg) => {
        console.log(msg);
        players.push(msg)

        if (players.length === 2) {
            io.emit('start_game', players)
        }
    })

    socket.on('guess', (msg) => {
        const {guess, name} = msg

        if (guess.toLowerCase() === secretWord.toLowerCase()) {
            io.emit('correct_guess', name)
            players = []
        }
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})