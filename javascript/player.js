class Player {
  constructor() {
    this.player = new Image();
    this.player.src = "./images/numero0.png";
    this.x = 600;
    this.y = 15;
    this.speedGr = 6;
    this.speedMov = 12;
    this.speedJump = 10;
    this.count = 0;
    this.w = 50;
    this.h = 76;
  }

  // MÉTODOS
  drawPlayer = () => {
    ctx.drawImage(this.player, this.x, this.y, this.w, this.h);
  };

  gravityPlayer = () => {
    this.y += this.speedGr;
  };

  playerLeft = () => {
    this.x -= this.speedMov;
  };

  playerRight = () => {
    this.x += this.speedMov;
  };

  jumpPlayer = () => {
    this.y -= this.speedJump;
    this.count++;
  };

}
