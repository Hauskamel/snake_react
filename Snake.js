class Snake {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.snakePartWidth = 50; // one cell wide
        this.snakePartHeight = 50; // on cell high
        this.snakeParts = this.generateSpawnPosition();
    }

    generateSpawnPosition() {
        this.row = Math.floor(Math.random() * 8);
        this.col = Math.floor(Math.random() * 8);
        this.positionsArray = [{
            x: this.row * 50,
            y: this.col * 50
        }, {
            x: (this.row * 50) + 50,
            y: this.col * 50
        },
            {
                x: (this.row * 50) + 100,
                y: this.col * 50
            }];

        return this.positionsArray;
    }

    updateSnakeHead (pressedKey) {
        switch (pressedKey) {
            case "ArrowUp":
                this.snakeParts[0] = {
                    x:this.snakeParts[0].x + 50,
                    y: this.snakeParts[0].y - 50
                }
                break;
            case "ArrowDown":
                this.snakeParts[0] = {
                    x:this.snakeParts[0].x + 50,
                    y: this.snakeParts[0].y + 50
                }
                break;
            case "ArrowLeft":
                this.snakeParts[0] = {
                    x:this.snakeParts[0].x - 50,
                    y: this.snakeParts[0].y
                }
                break;
            case "ArrowRight":
                this.snakeParts[0] = {
                    x:this.snakeParts[0].x + 50,
                    y: this.snakeParts[0].y
                }
                break;

        }
    }

    clearRect() {
        this.ctx.clearRect(0,0,this.ctx.width,this.ctx.height);
    }

    draw() {
        this.ctx.clearRect(0,0,this.ctx.width,this.ctx.height);
        this.snakeParts.forEach((snakePart, index) => {
            this.ctx.beginPath();
            this.ctx.rect(this.snakeParts[index].x, this.snakeParts[index].y, this.snakePartWidth, this.snakePartHeight);
            this.ctx.fillStyle = "#333333";
            this.ctx.fill();
        })
    }
}