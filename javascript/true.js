class True {
  constructor() {
    this.trueImage = new Image();
    this.trueImage.src = "./images/true.png";
    this.x = 70;
    this.y = 850;
    this.w = 120;
    this.h = 50;
  }

  //MÉTODOS

  drawTrue = () => {
    ctx.drawImage(this.trueImage, this.x, this.y, this.w, this.h);
  };
}
