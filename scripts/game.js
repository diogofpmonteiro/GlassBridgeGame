class Game {
  //properties
  constructor() {
    this.player = new Player();
    this.vertSpaceBetweenPanes = 150;
    this.xPaneLocationLeft = 180;
    this.xPaneLocationRight = 330;
    this.startingYLocation = 550;
    this.newYLocation = this.startingYLocation - this.vertSpaceBetweenPanes;
    this.paneArr = [
      [
        new GlassPane(this.xPaneLocationLeft, this.startingYLocation),
        new GlassPane(this.xPaneLocationRight, this.startingYLocation),
      ],
    ];
    this.paneCounter = this.paneArr.length;
    this.panesYLocations = [];
    this.stepCounter = -1;
    this.isGameOver = false;
    this.hearts = new Hearts();
    this.numOfLives = 2;
    this.score = 0;
  }

  //methods
  drawPlatform = () => {
    paintbrush.fillStyle = "red";
    paintbrush.fillRect(265, 700, 80, 120);
  }; // * done

  spawnInitialPanes = () => {
    while (this.paneCounter < 6) {
      let newPaneLeft = new GlassPane(this.xPaneLocationLeft, this.newYLocation);
      let newPaneRight = new GlassPane(this.xPaneLocationRight, this.newYLocation);
      this.paneCounter += 2;
      this.newYLocation -= 150;
      this.paneArr.push([newPaneLeft, newPaneRight]);
      this.panesYLocations.push(this.newYLocation);
    }
  }; // * done

  updateLives = () => {
    paintbrush.font = "25px Arial";
    paintbrush.fillText("Lives: " + this.numOfLives, 50, 50);
  }; // TODO - update hearts to same number of lives

  movePlayer = (event) => {
    this.stepCounter++;
    let valueRandomizer = Math.random();
    switch (event.code) {
      case "ArrowLeft":
        const leftPane = this.paneArr[this.stepCounter][0];
        let leftXCenter = leftPane.x + 25;
        let leftYCenter = leftPane.y + 10;
        this.player.xPos = leftXCenter;
        this.player.yPos = leftYCenter;
        if (valueRandomizer < 0.5) {
          leftPane.fakePane = true;
        }
        if (leftPane.fakePane) {
          this.numOfLives--;
        }
        if (this.numOfLives === 0) {
          this.gameover();
        }
        console.log("lives", this.numOfLives);
        console.log("score", this.score);
        break;
      case "ArrowRight":
        const rightPane = this.paneArr[this.stepCounter][1];
        let rightXCenter = rightPane.x + 25;
        let rightYCenter = rightPane.y + 10;
        this.player.xPos = rightXCenter;
        this.player.yPos = rightYCenter;
        if (valueRandomizer > 0.5) {
          rightPane.fakePane = true;
        }
        if (rightPane.fakePane) {
          this.numOfLives--;
        }
        if (this.numOfLives === 0) {
          this.gameover();
        }
        console.log("lives", this.numOfLives);
        console.log("score", this.score);
        break;
    }
  }; // TODO - animations

  updateScore = () => {
    initialScore.innerText = this.score;
  };

  spawnNewPanes = () => {
    // lvl 2
    // when counter > 8 hide the starting platform and add a new set of panes, delete sets of panes that are left behind
    if (this.paneCounter >= 9) {
      paintbrush.clearRect(265, 700, 80, 120);
      // ? don't know if this will work
    }
  }; // TODO - spawn new panes or re-do the game loop without restarting score

  gameover = () => {
    this.isGameOver = true;
    canvas.style.display = "none";
    gameoverScreen.style.display = "flex";
  }; // TODO - add delay? animations still missing

  gameLoop = () => {
    // console.log("it works"); // -> testing purposes
    // * 1. CLEAR THE CANVAS
    paintbrush.clearRect(0, 0, canvas.width, canvas.height);

    // * 2. MOVEMENT AND CHANGES ON ELEMENTS
    this.spawnInitialPanes();
    // ? function that updates number of lives
    // ? function that updates score

    // * 3. DRAWING THE ELEMENTS
    this.drawPlatform();
    this.paneArr.forEach((panePair) => {
      panePair.forEach((pane) => pane.drawPane());
    });
    this.player.drawPlayer();
    this.updateLives();
    this.hearts.drawHearts();

    // * 4. REQUEST ANIMATION FRAME AND GAME LOGIC CHANGES
    if (!this.isGameOver) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
