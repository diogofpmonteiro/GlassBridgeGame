class Hearts {
  constructor(xPos) {
    this.heartImage = new Image();
    this.heartImage.src = "./images/heart.png";
    this.width = 25;
    this.height = 25;
    this.xHeartPos = xPos;
    this.yHeartPos = 33;
  }

  drawHearts = () => {
    paintbrush.drawImage(this.heartImage, this.xHeartPos, this.yHeartPos, this.width, this.height);
  };
}
