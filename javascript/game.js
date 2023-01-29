// El juego:

class Game {
  constructor() {
    this.frames;
    this.bG = new Image();
    this.bG.src;
    this.player = new Player();
    this.arrSuelos = [];
    this.paredes = new Paredes();
    this.cantidadSuelos = 2;
  }

  // MÉTODOS (FUNCIONES DEL JUEGO)

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  drawFondoCanvas = () => {
    ctx.drawImage(this.bG, 0, 0, canvas.width, canvas.height);
  };

  // FUNCIÓN QUE METE EN EL ARRAY LAS PLATAFORMAS A PARTIR DE LA CLASE: SUELOS 

  createplat = () => {
    for(let i = 0; i < this.cantidadSuelos; i++) {
        this.arrSuelos.push(
            new Suelos(100 * i, 200 + (30 * i), 110, 15)
        );
    }
    }

    // ESTO NI CASO

  /* appearSuelos = () => {
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
      } else if (i === 4) {
        let sueloFinal = new Suelos(0, canvas.height - 15, canvas.width);
        this.arrSuelos.push(sueloFinal);
      }
    }
    console.log(this.arrSuelos);
  }; */


  // FUNCIÓN PARA COMPROBAR LA COLISIÓN 

  colisionPlayerSuelos = () => {
    let i = -1;
        if(this.arrSuelos[0].x < this.player.x && this.player.x < this.arrSuelos[0].x + this.arrSuelos[0].width &&
        this.arrSuelos[0].y < this.player.y && this.player.y < this.arrSuelos[0].y + this.arrSuelos[0].height){
            i = 0;
        }
        if(this.arrSuelos[1].x < this.player.x && this.player.x < this.arrSuelos[1].x + this.arrSuelos[1].width &&
        this.arrSuelos[1].y < this.player.y && this.player.y < this.arrSuelos[1].y + this.arrSuelos[1].height){
            i = 1;
        }
        if (i > -1){
            this.player.speedGr = 0;
            this.player.y = this.arrSuelos[i].y;
            console.log("Colisión!!")
        }
  }

    




  

  // Función principal

  gameLoop = () => {
    // 1.Limpiar el canvas
    this.clearCanvas();

    // 2.Movimientos y acciones de todos los elementos

    // this.appearSuelos();
    this.createplat();

    this.colisionPlayerSuelos();
    this.player.gravityPlayer();

    // 3. Dibujado de elementos

    this.drawFondoCanvas();
    this.player.drawPlayer();
    this.paredes.drawWall();
    this.arrSuelos.forEach((eachSuelo) => { // <---- PARA DIBUJAR LOS SUELOS
      eachSuelo.drawSuelos();
    });

    // Recursión y control
    this.frames++;

    requestAnimationFrame(this.gameLoop);
  };
}
