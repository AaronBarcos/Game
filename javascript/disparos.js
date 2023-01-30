class Disparos {
  constructor(posX, posY, name) {
    this.disparos = new Image();
    this.disparos.src = "./images/iguales.png";
    this.x = posX;
    this.y = posY;
    this.w = 140;
    this.h = 34;
    this.speed = 2;
    this.name = name;
  }

  // MÉTODOS

  drawDisparos = () => {
    ctx.drawImage(
      this.disparos,
      this.x,
      this.y,
      this.w,
      this.h
    );
  };

  moveDisparosDerecha = () => {
    this.x += this.speed;
  }

  moveDisparosLeft = () => {
    this.x -= this.speed;
  }


}
