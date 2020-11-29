import Game from './Game.js'

const newGame = new Game({
    lettersWrapper: document.getElementById('letters'),
    categoryWrapper: document.getElementById('category'),
    wordWrapper: document.getElementById('word'),
    outputWrapper: document.getElementById('output'),
})