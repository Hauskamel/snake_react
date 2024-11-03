class Food {
    constructor(canvas, ctx, row, col) {
        this.canvas = canvas; // canvas from 'Game.js'
        this.ctx = ctx; // ctx from 'Game.js'
        this.appleWidth = 50; // one cell wide
        this.appleHeight = 50; // on cell wide
        this.row = row; // row position
        this.col = col; // column position
    }


    // ---> generates a random number for row and column
    generateSpawnPosition () {
        this.row = Math.floor(Math.random()* 10);
        this.col = Math.floor(Math.random()* 10);
    }


    draw () {
        this.ctx.beginPath();
        this.ctx.rect(this.row*50,this.col*50, this.appleWidth, this.appleHeight);
        this.ctx.fillStyle = "#556b2f";
        this.ctx.fill();
    }
}