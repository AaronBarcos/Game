// VARIABLES GLOBALES

const canvas = document.querySelector("#my-canvas");
const startButton = document.querySelector("#start-button");
const startScreen = document.querySelector("#start-screen");
const gameOverScreen = document.querySelector("#game-over-screen");
const gameCompleteScreen = document.querySelector("#game-complete-screen");
const buttonTryAgain = document.querySelector("#try-again");
const buttonPlayAgain = document.querySelector("#play-again");

const ctx = canvas.getContext("2d");

let game;

// STATE MANAGEMENT FUNCTIONS

const startGame = () => {
  startScreen.style.display = "none";
  canvas.style.display = "block";

  game = new Game();

  game.gameLoop();
};

const tryAgain = () => {
  startGame();
  gameOverScreen.style.display = "none";
};

const playAgain = () => {
  startGame();
  gameCompleteScreen.style.display = "none";
};

const jumpInterval = () => {
  let controlJump = 0;
  a = setInterval(() => {
    game.player.jumpPlayer();
    controlJump++;
    if (controlJump > 15) {
      clearInterval(a);
    }
  }, 25);
};

movePlayer = (event) => {
  if (event.code === "ArrowLeft") {
    game.player.playerLeft();
  } else if (event.code === "ArrowRight") {
    game.player.playerRight();
  } else if (event.code === "Space" && game.player.count === 0) {
    jumpInterval();
  }
};

// ADD EVENT LISTENERS

startButton.addEventListener("click", startGame);
window.addEventListener("keydown", movePlayer);
buttonTryAgain.addEventListener("click", tryAgain);
buttonPlayAgain.addEventListener("click", playAgain);
