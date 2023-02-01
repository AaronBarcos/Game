class Paredes {
  constructor() {
    this.w = 25;
    this.h = canvas.height;
  }

  // MÉTODOS

  drawWall = () => {
    ctx.beginPath();
    ctx.rect(0, 0, this.w, this.h);
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(canvas.width - 25, 0, this.w, this.h);
    ctx.fillStyle = "blue";
    ctx.fill();
  };
}
