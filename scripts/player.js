class Player {
  constructor() {
    this.playerImage = new Image();
    this.playerImage.src = "./images/zombie_back.png";
    this.width = 50;
    this.height = 50;
    this.xPos = 280;
    this.yPos = 700;
  }

  drawPlayer = () => {
    paintbrush.drawImage(this.playerImage, this.xPos, this.yPos, this.width, this.height);
  };
}
