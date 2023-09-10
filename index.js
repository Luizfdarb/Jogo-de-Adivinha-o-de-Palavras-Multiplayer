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
let whoIsPlaying = 0

function resetGame() {
    gameStarted = true
    whoIsPlaying = Math.floor(Math.random() * 2)

    const {palavra, dicas} = game.getWord()
    secretWord = palavra
    const {tip, remaningTips} = game.getTip(dicas)

    console.log(palavra)

    players = players.map(player => {
        player.attempts = 0
        player.tips = remaningTips
        return player
    })

    whoIsPlaying = Math.floor(Math.random() * 2)

    io.emit('reset_game', {
        tip: tip,
        players: players.map(player => {
            return {player: player.player, score: player.score}
        }),
        whoIsPlaying: players[whoIsPlaying].player
    })
}

function resetSession() {
    players = []
    secretWord = ""
    gameStarted = false
    whoIsPlaying = 0

}

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

        players.push({player: msg, attempts: 0, tips: [], score: 0})

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

            whoIsPlaying = Math.floor(Math.random() * 2)

            io.emit('start_game', {
                tip: tip,
                players: players.map(player => {
                    return {player: player.player, score: player.score}
                }),
                whoIsPlaying: players[whoIsPlaying].player
            })
        }
    })

    socket.on('guess', (msg) => {
        const {guess, name} = msg

        if (gameStarted && players.map(player => player.player).indexOf(name) === -1) {
            socket.emit('invalid_user', "Usuário inválido")
            return
        }

        const player = players.find(player => player.player === name)

        if (player.attempts + 1 === 7) {
            io.emit('game_over', {player: player.player, word: secretWord})
            players = players.map(playerTemp => {
                if (playerTemp.player === player.player) {
                    return player
                }
                playerTemp.score++
                return playerTemp
            })
            resetGame()
        }

        whoIsPlaying = whoIsPlaying === 0 ? 1 : 0
        io.emit('turn', {whoIsPlaying: players[whoIsPlaying].player})

        if (game.guessedIt(secretWord, guess)) {
            player.score++
            players = players.map(playerTemp => {
                if (playerTemp.player === player.player) {
                    return player
                }
                return playerTemp
            })
            io.emit('correct_guess', {player: player.player, guess: guess})

            resetGame()
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
        console.log(message)
        if (players.length !== 2 || players.map(player => player.player).indexOf(message) !== -1) {
            return
        }
        io.emit('user_disconnected', `${message} desconectou`)
        resetSession()
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})

