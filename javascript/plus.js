class Plus {

    constructor(posX, posY) {
        this.plusImg = new Image();
        this.plusImg.src = "./images/plus.png";
        this.x = posX;
        this.y = posY;
        this.w = 50; 
        this.h = 50;
    }


    //Métodos

    drawPlus = () => {
        ctx.drawImage(this.plusImg, this.x, this.y, this.w, this.h);
    }

}