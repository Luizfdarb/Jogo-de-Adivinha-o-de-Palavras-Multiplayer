const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const http = require('http')
const Game = require('./game.js')

const {Server} = require('socket.io')
const server = http.createServer(app)

const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

let players = []
let secretWord = ""
const game = new Game()

io.on('connection', (socket) => {

    socket.on('search_player', (msg) => {
        console.log(msg);
        players.push({player: msg, attempts: 0, tips : []})

        if (players.length === 2) {

            const {palavra, dicas} = game.getWord()
            secretWord = palavra
            const {tip, remaningTips} = game.getTip(dicas)

            players = players.map(player => {
                player.attempts = 0
                player.tips = remaningTips
                return player
            })

            io.emit('start_game', {tip: tip, players: players.map(player => player.player)})
        }
    })

    socket.on('guess', (msg) => {
        const {guess, name} = msg

        const player = players.find(player => player.player === name)

        if (game.guessedIt(secretWord, guess)) {
            io.emit('correct_guess', name)
            players = []
            secretWord = ""
        }

        player.attempts++

        if (game.shouldGiveATip(player.attempts)) {
            const {tip, remaningTips} = game.getTip(player.tips)
            player.tips = remaningTips
            console.log("Dei uma tip")
            socket.emit('tip', {tip: tip})
            return
        }

        players = players.map(playerTemp => {
            if (playerTemp.player === player.player) {
                return player
            }
            return playerTemp
        })

        socket.emit('tip', {tip: null})
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})