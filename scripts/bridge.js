class GlassPane {
  constructor(xPos, yPos) {
    //Glass pane image or Rect square
    this.image = new Image();
    this.image.src = "./images/glasspane.png";
    this.width = 100;
    this.height = 100;
    this.x = xPos;
    this.y = yPos;
    this.fakePane = false;
  }

  drawPane = () => {
    paintbrush.drawImage(this.image, this.x, this.y, this.width, this.height);
  };
}
