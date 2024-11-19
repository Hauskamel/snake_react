class Food {
    constructor(canvas, ctx) {
        this.canvas = canvas; // canvas from 'Game.js'
        this.ctx = ctx; // ctx from 'Game.js'
        this.appleWidth = 50; // one cell wide
        this.appleHeight = 50; // on cell wide
    }


    // ---> generates a random number for row and column
    generateSpawnPosition () {
        this.row = Math.floor(Math.random() * 10);
        this.col = Math.floor(Math.random() * 10);
        this.returnActualSpawnIndex()
    }

    returnActualSpawnIndex() {
        return [this.row, this.col]
    }


    draw () {
        this.ctx.beginPath();
        this.ctx.rect(this.col*50,this.row*50, this.appleWidth, this.appleHeight);
        this.ctx.fillStyle = "#cc3b3b";
        this.ctx.fill();
    }
}