class Player {
    constructor() {
        this.player = new Image();
        this.player.src = "./images/numero0.png"
        this.x = 600;
        this.y = 15;
        this.speedGr = 2;
        this.speedMov = 2;

    }




    // MÉTODOS
    drawPlayer = () => {

        ctx.drawImage(this.player, this.x, this.y, this.player.width, this.player.height);
        
    }

    gravityPlayer = () => {
        this.y += this.speedGr;
    }

    playerLeft = () => {
        this.x -= this.speedMov;
    }

    playerRight = () => {
        this.x += this.speedMov;
    }
}