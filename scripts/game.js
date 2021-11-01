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
      new GlassPane(this.xPaneLocationLeft, this.startingYLocation),
      new GlassPane(this.xPaneLocationRight, this.startingYLocation),
      // new GlassPane(180, 400),
      // new GlassPane(330, 400),
      // new GlassPane(180, 250),
      // new GlassPane(330, 250),
      // new GlassPane(180, 100),
      // new GlassPane(330, 100),
    ];
    this.paneCounter = 2;
  }

  //methods
  drawPlatform = () => {
    paintbrush.fillStyle = "red";
    paintbrush.fillRect(265, 700, 80, 120);
  }; // * done

  gameover = () => {
    //stop the game
    //? show restart screen
  }; // TODO

  spawnPanes = () => {
    if (this.paneCounter < 8) {
      let newPaneLeft = new GlassPane(this.xPaneLocationLeft, this.newYLocation);
      let newPaneRight = new GlassPane(this.xPaneLocationRight, this.newYLocation);
      // add a counter of panes existing on the paneArr
      this.paneArr.push(newPaneLeft);
      this.paneArr.push(newPaneRight);
    }

    // TODO when counter > 4 hide the starting platform and add a new set of panes, delete first set of panes
  };

  gameLoop = () => {
    // console.log("it works"); // -> testing purposes
    // * 1. CLEAR THE CANVAS
    paintbrush.clearRect(0, 0, canvas.width, canvas.height);

    // * 2. MOVEMENT AND CHANGES ON ELEMENTS
    // this.player.movePlayer(); // TODO
    this.spawnPanes();

    // * 3. DRAWING THE ELEMENTS
    this.drawPlatform();
    this.paneArr.forEach((pane) => pane.drawPane());
    this.player.drawPlayer();

    // * 4. REQUEST ANIMATION FRAME AND GAME LOGIC CHANGES
    requestAnimationFrame(this.gameLoop);
  };
}
