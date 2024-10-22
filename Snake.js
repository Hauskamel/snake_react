class Snake {
    constructor(canvas, ctx, x, y) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.snakePartWidth = 50; // one cell wide
        this.snakePartHeight = 50; // on cell high
        this.snakeParts = this.generateSpawnPosition();
    }

    generateSpawnPosition() {
        this.row = Math.floor(Math.random() * 8)
        this.col = Math.floor(Math.random() * 8)
        this.temporaryPositionsArray = [{
            x: this.row * 50,
            y: this.col * 50
        }, {
            x: (this.row * 50) + 50,
            y: this.col * 50
        },
            {
                x: (this.row * 50) + 100,
                y: this.col * 50
            }]
        return this.temporaryPositionsArray;
    }


    draw() {
        this.snakeParts.forEach((snakePart, index) => {
            this.ctx.beginPath();
            this.ctx.rect(this.snakeParts[index].x, this.snakeParts[index].y, this.snakePartWidth, this.snakePartHeight);
            this.ctx.fillStyle = "#333333";
            this.ctx.fill();
        })
    }
}