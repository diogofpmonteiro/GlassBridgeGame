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
let game;
// add a function that after a certain amount of panes gives you an extra life
let numOfLives = 0; // TODO

// * FUNCTIONS
const startGame = () => {
  splashScreen.style.display = "none";
  game = new Game();
  game.gameLoop();
};

// * ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame);
// window.addEventListener("keydown", movePlayer);
