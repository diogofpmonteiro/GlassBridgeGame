let canvas = document.querySelector("#game-canvas");
let paintbrush = canvas.getContext("2d");
let splashScreen = document.querySelector("#welcome-screen");
let gameoverScreen = document.querySelector("#gameover-screen");
let startBtn = document.querySelector("#start-btn");
let restartBtn = document.querySelector("#restart-btn");
let scoreText = document.querySelector("#score");
let backgroundMusic;
let game;

const playMusic = () => {
  backgroundMusic = new Audio("../sounds/pinksoldiers.mp3");
  backgroundMusic.loop = true;
  backgroundMusic.volume = 0.1;
  backgroundMusic.play();
};

const startGame = () => {
  splashScreen.style.display = "none";
  canvas.style.display = "flex";
  scoreh2.style.display = "flex";
  game = new Game();
  document.addEventListener("keydown", game.movePlayer);
  playMusic();
  game.gameLoop();
};

const restartGame = () => {
  document.location.reload();
};

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);
