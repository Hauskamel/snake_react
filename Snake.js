class Snake {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.snakeBodyCellWidth = 50;
        this.snakeBodyCellHeight = 50;

        // array with all visual grid cells of snake
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
        this.headSpawnPosition();
    }

    // ---> method simply returns the array of the snake heads spawn position in the 'Game' class when the game is initialized
    headSpawnPosition () {
        return this.snakeAllElements[0]
    }


    initializeSnake () {
        this.spawnBodyPart();
    }
    
    spawnBodyPart () {
        // TODO: To make it logically correct - later the snakes head direction (the direction where the player goes) has to play a role where to place the element
        //       for now its ok to just add it to the snakes right

        const lastSnakeCell = this.snakeAllElements.pop();
    }


    // ---> method draws all snake elements to the board
    draw () {
        this.ctx.beginPath();
        this.ctx.rect(this.col*50,this.row*50, this.snakeBodyCellWidth, this.snakeBodyCellHeight);
        this.ctx.fillStyle = "#556b2f";
        this.ctx.fill();
    }

}