class Game {
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
    this.heartsArr = [new Hearts(125), new Hearts(155)];
    this.score = 0;
  }

  drawPlatform = () => {
    paintbrush.fillStyle = "red";
    paintbrush.fillRect(265, 700, 80, 120);
  };

  spawnInitialPanes = () => {
    while (this.paneCounter < 6) {
      let newPaneLeft = new GlassPane(this.xPaneLocationLeft, this.newYLocation);
      let newPaneRight = new GlassPane(this.xPaneLocationRight, this.newYLocation);
      this.paneCounter += 2;
      this.newYLocation -= 150;
      this.paneArr.push([newPaneLeft, newPaneRight]);
      this.panesYLocations.push(this.newYLocation);
    }
  };

  livesText = () => {
    paintbrush.fillStyle = "#bb0a1e";
    paintbrush.font = "25px Fruktur";
    paintbrush.fillText("Lives: ", 50, 50);
  };

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
          this.heartsArr.pop();
          playGlassBreak();
        } else {
          this.score++;
          playJumpSound();
        }
        if (this.heartsArr.length === 0) {
          this.gameover();
        }
        console.log(this.stepCounter);
        if (this.stepCounter === 3 && this.heartsArr.length >= 1) {
          this.winning();
        }
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
          this.heartsArr.pop();
          playGlassBreak();
        } else {
          this.score++;
          playJumpSound();
        }
        if (this.heartsArr.length === 0) {
          this.gameover();
        }
        console.log(this.stepCounter);
        if (this.stepCounter === 3 && this.heartsArr.length >= 1) {
          this.winning();
        }
        break;
    }
  }; // TODO - add animations

  winning = () => {
    playWinningSound();
    this.isGameOver = true;
    canvas.style.display = "none";
    scoreh2.style.display = "none";
    winningScreen.style.display = "flex";
    backgroundMusic.pause();
  };

  gameover = () => {
    this.isGameOver = true;
    canvas.style.display = "none";
    scoreh2.style.display = "none";
    gameoverScreen.style.display = "flex";
    backgroundMusic.pause();
    gameoverMusic.play();
  }; // TODO - add animations

  gameLoop = () => {
    // * 1. CLEAR THE CANVAS
    paintbrush.clearRect(0, 0, canvas.width, canvas.height);

    // * 2. MOVEMENT AND CHANGES ON ELEMENTS
    this.spawnInitialPanes();
    scoreText.innerText = this.score;

    // * 3. DRAWING THE ELEMENTS
    this.drawPlatform();
    this.paneArr.forEach((panePair) => {
      panePair.forEach((pane) => pane.drawPane());
    });
    this.player.drawPlayer();
    this.livesText();
    this.heartsArr.forEach((heart) => heart.drawHearts());

    // * 4. REQUEST ANIMATION FRAME AND GAME LOGIC CHANGES
    if (!this.isGameOver) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}

// TODO - level 2 feature
