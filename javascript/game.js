// El juego:

class Game {
  constructor() {
    this.frames;
    this.bG = new Image();
    this.bG.src;
    this.player = new Player();
    this.arrSuelos = [];
    this.paredes = new Paredes();
  }

  // MÉTODOS (FUNCIONES DEL JUEGO)

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  drawFondoCanvas = () => {
    ctx.drawImage(this.bG, 0, 0, canvas.width, canvas.height);
  };

  appearSuelos = () => {
    for (let i = 0; i < 5; i++) {
      if (i === 0) {
        let newSuelo0 = new Suelos(200, 100, 550);
        this.arrSuelos.push(newSuelo0);
      } else if (i === 1) {
        let newSuelo1 = new Suelos(0, 275, 450);
        this.arrSuelos.push(newSuelo1);
      } else if (i === 2) {
        let newSuelo2 = new Suelos(200, 550, 550);
        this.arrSuelos.push(newSuelo2);
      } else if (i === 3) {
        let newSuelo3 = new Suelos(0, 800, 550);
        this.arrSuelos.push(newSuelo3);
      } else if (i=== 4) {
        let sueloFinal = new Suelos(0, (canvas.height - 15), canvas.width);
        this.arrSuelos.push(sueloFinal);
      }
    }
  };

  // Función principal

  gameLoop = () => {
    // 1.Limpiar el canvas
    this.clearCanvas();

    // 2.Movimientos y acciones de todos los elementos

    this.appearSuelos();
    this.player.gravityPlayer();
    // 3. Dibujado de elementos

    this.drawFondoCanvas();
    this.player.drawPlayer();
    this.paredes.drawWall();
    this.arrSuelos.forEach((eachSuelo) => {
        eachSuelo.drawSuelos();
    });
    

    // Recursión y control
    this.frames++;

    requestAnimationFrame(this.gameLoop);
    console.log("Eyyyy");
  };
}
