class Snake {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.snakeAllElements = [];
    }

    // generates two random numbers and
    // method only executes at game initialisation.
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


    // ---> method draws all snake elements to the board
    draw () {

    }

}