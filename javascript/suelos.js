class Suelos {
    constructor(xPos, yPos, w, h) {
        this.x = xPos;
        this.y = yPos;
        this.w = w;
        this.h = h;


    }




    // MÉTODOS

    drawSuelos = () => {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = "green";
        ctx.stroke();
        ctx.fill();
        
    }
}