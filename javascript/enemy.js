class Enemy {
  constructor(posX, posY) {
    this.enemy = new Image();
    this.enemy.src = "./images/numero1.png";
    this.x = posX;
    this.y = posY;
  }

  // MÉTODOS

  drawEnemy = () => {
    ctx.drawImage(
      this.enemy,
      this.x,
      this.y,
      this.enemy.width,
      this.enemy.height
    );
  };
}
