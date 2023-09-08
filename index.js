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
let gameStarted = false

io.on('connection', (socket) => {

    socket.on('search_player', (msg) => {
        console.log(msg);
        if (gameStarted) {
            socket.emit('game_started', "O jogo já começou")
            return
        }

        if (players.filter(player => player.player === msg).length > 0) {
            return
        }

        players.push({player: msg, attempts: 0, tips : []})

        if (players.length === 2) {
            gameStarted = true
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

        if (gameStarted && players.map(player => player.player).indexOf(name) === -1) {
            socket.emit('invalid_user', "Usuário inválido")
            return
        }

        const player = players.find(player => player.player === name)

        if (game.guessedIt(secretWord, guess)) {
            io.emit('correct_guess', {player: player.player, guess: guess})
            players = []
            secretWord = ""
            gameStarted = false
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

    socket.on('disconnect', (message) => {
        if (players.length !== 2 || players.map(player => player.player).indexOf(message) !== -1) {
            return
        }
        io.emit('user_disconnected', `${message} desconectou`)
        players = []
        secretWord = ""
        gameStarted = false
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})