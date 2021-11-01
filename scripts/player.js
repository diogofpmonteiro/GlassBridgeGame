class Player {
  constructor() {
    //player img
    this.playerImage = new Image();
    this.playerImage.src = "../images/zombie_back.png";
    //player size
    this.width = 50;
    this.height = 50;
    //player position
    this.x = 280; //to determine
    this.y = 700; //to determine
  }
  //methods
  //drawing the player
  drawPlayer = () => {
    paintbrush.drawImage(this.playerImage, this.x, this.y, this.width, this.height);
  }; // * done

  // move method
  // basically choosing which pane to go next
  // no animation needed, just move the player image to the desired pane
  movePlayer = (event) => {
    // TODO
    // // if left arrow key, move to the left pane
    // // if right arrow key, move to the right pane
    // let counter = 0;
    // if (counter === 0 && event.code === "ArrowLeft") {
    //   this.x -= 75;
    //   this.y -= 130;
    //   counter++;
    // } else if (counter === 0 && event.code === "ArrowRight") {
    //   this.x += 75;
    //   this.y -= 130;
    //   counter++;
    // }
  };
}
