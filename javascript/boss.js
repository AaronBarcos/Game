class Boss {
    constructor() {
        this.bossImg = new Image();
        this.bossImg.src = "./images/boss.png"
        this.x = 35;
        this.y = 800;
        this.w = 75;
        this.h = 125;
    }

    //Métodos

    drawBoss = () => {
        ctx.drawImage(this.bossImg, this.x, this.y, this.w, this.h);
    }
}