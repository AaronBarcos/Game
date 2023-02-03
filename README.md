# EN

# NAME OF YOUR PROYECT

Is 1 equal to 0?

## [Play the Game](https://aaronbarcos.github.io/Game/)

# Description

This is a game project made in Canvas JS by me.

The platform game "Is 1 equal to 0?" tries to solve in a fun way the doubt that gives title to the game. You will become the number 0 and your goal is to reach "true" to discover the answer.

Remember that you can try to take all the bonuses to discover something additional (;

# Main Functionalities

- The main functionalities of the game are the movements that the character has (left, right, jump, gravity). The enemies and the shots. The pluses and their secrets. Collisions between characters, shots, floors, walls... In addition to being able to play again once passed or try the game again.

# Backlog Functionalities

- Add more styles to the game.

# Proyect Structure

- The game has an index.html file where different parts of the game are displayed on the screen, along with a style.css file to give it more aesthetics. In the .html file, the different functionalities of the game are indexed through different .js files.
- List of JS files:

## main.js - The most important functions of the game are found, as well as the global variables

- startGame()
- tryAgain()
- playAgain()
- jumpInterval()
- movePlayer()

## game.js - The game class contains the game functions such as collisions, drawn elements, control variables, variables of other classes...

- Game () {
  this.player;
  }
- gameLoop () {}
- checkCollisions () {}

## player.js - The class of the player, there are different properties as well as functions of movements and drawing.

- Player () {
  this.x;
  this.y;
  this.w;
  this.h;
  }
- drawPlayer () {}
- movePlayer () {}

## enemy.js - The class of the enemies.

- Enemy {
  constructor() {
  this.enemy;
  this.enemy.src;
  this.x;
  this.y;
  }

  drawEnemy()

## disparos.js - The class of the enemies's shots.

- Disparos {
  constructor() {
  this.disparos;
  this.disparos.src;
  this.x;
  this.y;
  this.w;
  this.h;
  this.speed;
  this.name;
  }

  drawDisparos())
  moveDisparosDerecha()
  moveDisparosLeft()

## suelos.js - The game platforms.

## paredes.js - The walls of the game space.

## plus.js - The pluses to collect.

## true.js - Object to win in the game.

## boss.js - Is there a boss?

# ES

# NOMBRE DEL PROYECT0

Is 1 equal to 0?

## [Juega:](https://aaronbarcos.github.io/Game/)

# Descripción

Esto es un proyecto de videjuego hecho en Canvas JS por mi.

El juego de plataformas "Is 1 equal to 0?" trata de solventar de una forma divertida la duda que da título al juego. Te convertirás en el número 0 y tu objetivo es llegar a "true" para descubrir la respuesta. Recuerda que puedes intentar coger todos los pluses para descubrir algo adicional (;

# Funcionalidades principales

- Las funcionalidades principales del juego son los movimientos que tiene el personaje(izquierda, derecha, salto, gravedad). Los enemigos y los disparos. Los pluses y sus secretos. Las colisiones entre personajes, disparos, suelos, paredes... Además de poder volver a jugar una vez superado o volver a intentar la partida.

# Backlog Functionalities

- Agregar más estilos al juego

# Estructura del proyecto

- El juego tiene un archivo index.html donde se muestra en la pantalla distintas partes del juego, junto con un archivo style.css para darle más estética. En el archivo .html se indexan las distintas funcionalidades del juego a través de distintos archivos .js.
- Lista de archivos JS:

## main.js - Se encuentran las funciones más importantes del juego, así como las variables globales

- startGame()
- tryAgain()
- playAgain()
- jumpInterval() Salto progresivo del jugador.
- movePlayer() Movimientos del jugador.

## game.js - La clase del juego, se encuentran las funciones del juego como colisiones, dibujados de elementos, variables de control, variables de otras clases...

- Game () {
  this.player;
  this.etc;
  }
- gameLoop () {} Función que ejecuta distintas funciones del juego en un bucle controlado por los frames de pantalla.
- checkCollisions () {}

## player.js - La clase del jugador, se encuentran distintas propiedades así como funciones de movimientos y dibujado.

- Player {
  constructor() {
  this.player;
  this.player;
  this.x;
  this.y;
  this.speedG;
  this.speedMov;
  this.speedJump;
  this.count;
  this.w;
  this.h;
  }

  drawPlayer()
  gravityPlayer()
  playerLeft()
  playerRight()
  jumpPlayer()

  ## enemy.js - La clase de los enemigos.

- Enemy {
  constructor() {
  this.enemy;
  this.enemy.src;
  this.x;
  this.y;
  }

  drawEnemy()

## disparos.js - La clase de los disparos de los enemigos.

- Disparos {
  constructor() {
  this.disparos;
  this.disparos.src;
  this.x;
  this.y;
  this.w;
  this.h;
  this.speed;
  this.name;
  }

  drawDisparos())
  moveDisparosDerecha()
  moveDisparosLeft()

## suelos.js - Las plataformas del juego.

## paredes.js - Las paredes del espacio del juego.

## plus.js - Los pluses para recolectar.

## true.js - Objeto para ganar en el juego.

## boss.js - ¿Hay boss?
