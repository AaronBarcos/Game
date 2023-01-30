// El juego:

class Game {
  constructor() {
    this.isGameOn = true;
    this.frames = 1;
    this.bG = new Image();
    this.true = new True();
    this.bG.src;
    this.player = new Player();
    this.arrSuelos = [];
    this.arrEnemigos = [];
    this.arrDisparos = [];
    this.paredes = new Paredes();
    this.cantidadSuelos = 5;
    this.cantidadEnemigos = 5;
  }

  // MÉTODOS (FUNCIONES DEL JUEGO)

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  drawFondoCanvas = () => {
    ctx.drawImage(this.bG, 0, 0, canvas.width, canvas.height);
  };

  gameOver = () => {
    // 1.Detiene la recursión
    this.isGameOn = false;
    // 2.Ocultar el canvas
    canvas.style.display = "none";
    // 3.Mostrar la pantalla GameOver
    gameOverScreen.style.display = "block";
  };

  appearSuelos = () => {
    for (let i = 0; i < this.cantidadSuelos; i++) {
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
  };

  appearEnemigos = () => {
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      if (i === 0) {
        let newEnemy0 = new Enemy(35, 195);
        this.arrEnemigos.push(newEnemy0);
      } else if (i === 1) {
        let newEnemy1 = new Enemy(620, 370);
        this.arrEnemigos.push(newEnemy1);
      } else if (i === 2) {
        let newEnemy2 = new Enemy(620, 470);
        this.arrEnemigos.push(newEnemy2);
      } else if (i === 3) {
        let newEnemy3 = new Enemy(35, 620);
        this.arrEnemigos.push(newEnemy3);
      } else if (i === 4) {
        let newEnemy4 = new Enemy(35, 720);
        this.arrEnemigos.push(newEnemy4);
      }
    }
  };

  appearDisparos = () => {
    if (this.arrDisparos.length === 0 || this.frames % 150 === 0) {
      let disparosEnemy0 = new Disparos(70, 240, "disparo0");
      this.arrDisparos.push(disparosEnemy0);

      let disparosEnemy1 = new Disparos(510, 415, "disparo1");
      this.arrDisparos.push(disparosEnemy1);

      let disparosEnemy2 = new Disparos(510, 515, "disparo2");
      this.arrDisparos.push(disparosEnemy2);

      let disparosEnemy3 = new Disparos(70, 665, "disparo3");
      this.arrDisparos.push(disparosEnemy3);

      let disparosEnemy4 = new Disparos(70, 765, "disparo4");
      this.arrDisparos.push(disparosEnemy4);
    }
  };

  moveDisparos = () => {
    this.arrDisparos.forEach((eachDisparo) => {
      if (eachDisparo.name === "disparo0") {
        eachDisparo.moveDisparosDerecha();
      } else if (eachDisparo.name === "disparo1") {
        eachDisparo.moveDisparosLeft();
      } else if (eachDisparo.name === "disparo2") {
        eachDisparo.moveDisparosLeft();
      } else if (eachDisparo.name === "disparo3") {
        eachDisparo.moveDisparosDerecha();
      } else if (eachDisparo.name === "disparo4") {
        eachDisparo.moveDisparosDerecha();
      }
    });
  };

  /* removeDisparosDeLaMemoria = () => {
  if (this.arrDisparos[0].x > canvas.width) {
    this.arrDisparos.shift();
  } else if (this.arrDisparos[0].x < canvas.width) {
    this.arrDisparos.shift();
  }
}; */

  // FUNCIONES PARA COMPROBAR LA COLISIÓN
  colisionPlayerParedes = () => {
    if(this.player.x < 0 + this.paredes.w) {
      this.player.speedMov = 0;
      this.player.x = this.player.x + 1;
    } else if (this.player.x + this.player.w > canvas.width - this.paredes.w) {
      this.player.speedMov = 0;
      this.player.x = this.player.x - 1;
    } else {
      this.player.speedMov = 6;
    }
  }
  colisionPlayerSuelos = () => {
    for (let n = 0; n < this.cantidadSuelos; n++) {
      let i = -1;
      if (
        this.arrSuelos[n].x < this.player.x &&
        this.player.x < this.arrSuelos[n].x + this.arrSuelos[n].w &&
        this.arrSuelos[n].y < this.player.y + this.player.h &&
        this.player.y + this.player.h <
          this.arrSuelos[n].y + this.arrSuelos[n].h
      ) {
        i = n;
        this.player.speedGr = 0;
        this.player.y = this.arrSuelos[i].y - this.player.h; // salimos del bucle, porque con detectar una colisión ya vale
      } else {
        this.player.speedGr = 2;
      }
    }
  };

  colisionPlayerDisparos = () => {
    this.arrDisparos.forEach((eachDisparo) => {
      if (
        eachDisparo.x < this.player.x + this.player.w &&
        eachDisparo.x + eachDisparo.w > this.player.x &&
        eachDisparo.y < this.player.y + this.player.h &&
        eachDisparo.h + eachDisparo.y > this.player.y
      ) {
        this.gameOver();
        console.log("Estás muerto!!!");
      } else {
        // No colisiona
      }
    });
  };

  // Función principal

  gameLoop = () => {
    // 1.Limpiar el canvas
    this.clearCanvas();

    // 2.Movimientos y acciones de todos los elementos

    this.appearSuelos();
    this.appearEnemigos();
    this.appearDisparos();
    this.moveDisparos();
    // this.removeDisparosDeLaMemoria();

    // this.removeDisparosDeLaMemoria()
    this.colisionPlayerParedes();
    this.colisionPlayerDisparos();
    this.colisionPlayerSuelos();
    this.player.gravityPlayer();

    // 3. Dibujado de elementos

    this.drawFondoCanvas();
    this.player.drawPlayer();
    this.true.drawTrue();
    
    this.arrSuelos.forEach((eachSuelo) => {
      // <---- PARA DIBUJAR LOS SUELOS
      eachSuelo.drawSuelos();
    });
    this.arrEnemigos.forEach((eachEnemy) => {
      eachEnemy.drawEnemy();
    });
    this.arrDisparos.forEach((eachDisparo) => {
      eachDisparo.drawDisparos();
    });
    this.paredes.drawWall();

    // Recursión y control
    this.frames++;

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
