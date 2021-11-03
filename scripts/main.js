// * GLOBAL VARIABLES and QUERY SELECTORS
//canvas
let canvas = document.querySelector("#game-canvas");
//paintbrush
let paintbrush = canvas.getContext("2d");
//other dom elements
let splashScreen = document.querySelector("#welcome-screen");
let gameoverScreen = document.querySelector("#gameover-screen");
let startBtn = document.querySelector("#start-btn");
let restartBtn = document.querySelector("#restart-btn");
//game object variables
let scoreText = document.querySelector("#score");
let game;

// * FUNCTIONS
const startGame = () => {
  splashScreen.style.display = "none";
  canvas.style.display = "flex";
  scoreh2.style.display = "flex";
  game = new Game();
  document.addEventListener("keydown", game.movePlayer);
  game.gameLoop();
}; // * done

const restartGame = () => {
  document.location.reload();
}; // * done

// * ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);
