class Snake {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.snakeBodyCellWidth = 50;
        this.snakeBodyCellHeight = 50;

        this.snakeAllElements = [];
    }

    // generates two random numbers and
    // method only executes at game initialisation or when apple has same position as snake head.
    generateHeadSpawnPosition () {
        this.row = Math.floor(Math.random() * 10)
        this.col = Math.floor(Math.random() * 10)
        // -> initializes an array where the spawn position of the snake is stored
        this.snakeHeadPosition = [this.row, this.col];
        // -> pushes snakeHeadPosition array into the array where all snake elements are stored
        this.snakeAllElements.push(this.snakeHeadPosition)
        // -> passes array to method
        this.returnHeadSpawnPosition();
    }

    // ---> method simply returns the array of the snake heads spawn position in the 'Game' class when the game is initialized
    returnHeadSpawnPosition () {
        return this.snakeAllElements[0]
    }



    initializeSnakeBasedOnHeadPosition () {

    }


    // ---> method draws all snake elements to the board
    draw () {
        this.ctx.beginPath();
        this.ctx.rect(this.col*50,this.row*50, this.snakeBodyCellWidth, this.snakeBodyCellHeight);
        this.ctx.fillStyle = "#556b2f";
        this.ctx.fill();
    }

}