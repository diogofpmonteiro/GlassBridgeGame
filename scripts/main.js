let canvas = document.querySelector("#game-canvas");
let paintbrush = canvas.getContext("2d");
let splashScreen = document.querySelector("#welcome-screen");
let gameoverScreen = document.querySelector("#gameover-screen");
let winningScreen = document.querySelector("#winning-screen");
let startBtn = document.querySelector("#start-btn");
let restartBtn = document.querySelector("#restart-btn");
let playAgainBtn = document.querySelector("#play-again-btn");
let scoreText = document.querySelector("#score");
let backgroundMusic;
let gameoverMusic;
let glassBreakSound;
let jumpSound;
let winningSound;
let game;

const playBackgroundMusic = () => {
  backgroundMusic = new Audio("./sounds/pinksoldiers.mp3");
  backgroundMusic.loop = true;
  backgroundMusic.volume = 0.1;
  backgroundMusic.play();
};

const playGlassBreak = () => {
  glassBreakSound = new Audio("./sounds/glassbreak.wav");
  glassBreakSound.loop = false;
  glassBreakSound.volume = 0.2;
  glassBreakSound.play();
};

const playGameoverMusic = () => {
  gameoverMusic = new Audio("./sounds/gameover.wav");
  gameoverMusic.loop = false;
  gameoverMusic.volume = 0.2;
};

const playJumpSound = () => {
  jumpSound = new Audio("./sounds/jump.wav");
  jumpSound.loop = false;
  jumpSound.volume = 0.2;
  jumpSound.play();
};

const playWinningSound = () => {
  winningSound = new Audio("./sounds/winningcheer.wav");
  winningSound.loop = false;
  winningSound.volume = 0.2;
  winningSound.play();
};

const startGame = () => {
  splashScreen.style.display = "none";
  canvas.style.display = "flex";
  // scoreh2.style.display = "flex";
  game = new Game();
  playBackgroundMusic();
  playGameoverMusic();
  document.addEventListener("keydown", game.movePlayer);
  game.gameLoop();
};

const restartGame = () => {
  document.location.reload();
};

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);
playAgainBtn.addEventListener("click", restartGame);
