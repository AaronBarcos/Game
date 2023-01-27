// VARIABLES GLOBALES

const canvas = document.querySelector("#my-canvas")
const title = document.querySelector("#title-game");
const startButton = document.querySelector("#start-button");
const startScreen = document.querySelector("#start-screen");

const ctx = canvas.getContext('2d');

let game;

// STATE MANAGEMENT FUNCTIONS

const startGame = () => {

    startScreen.style.display = "none"
    canvas.style.display = "block"
    title.style.display = "none"
    
    game = new Game();

    game.gameLoop();


}









// ADD EVENT LISTENERS

startButton.addEventListener("click", startGame);