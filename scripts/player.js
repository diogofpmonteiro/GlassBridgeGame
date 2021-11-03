class Player {
  constructor() {
    //player img
    this.playerImage = new Image();
    this.playerImage.src = "../images/zombie_back.png";
    //player size
    this.width = 50;
    this.height = 50;
    //player position
    this.xPos = 280; //to determine
    this.yPos = 700; //to determine
  }
  //methods
  //drawing the player
  drawPlayer = () => {
    paintbrush.drawImage(this.playerImage, this.xPos, this.yPos, this.width, this.height);
  }; // * done
}
