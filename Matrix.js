class Matrix {
    constructor(rows, food, snake) {
        this.rows = rows;
        this.food = food;
        this.snake = snake;

        // initializes Matrix
        this.matrix = new Array(10).fill(0).map(() => new Array(10).fill(0)); // creates an array out element in the fill() method
    }

    managePosition(position) {
        let matrixRow = position[0];
        let matrixCol = position[1];

        this.tempMatrix[matrixRow][matrixCol] = 1; // updates matrix on position 'matrixRow' and 'matrixCol'
    }


    // ---> gets current positions of all elements of this current frame
    getCurrentFramePositions() {
        // -> returns spawn position of apple.
        // Because the apple does not move and stays where it spawns, the spawnPosition is enough to return (no 'currentPosition' needed)
        this.foodSpawnPosition = this.food.returnFoodSpawnPosition()
        // -> returns current snake position.
        // -> Because the snake needs to be updated (based on the players input) the current position is required to update the matrix accordingly.
        this.snakeHeadSpawnPosition = this.snake.returnHeadSpawnPosition()
        // this.snakePosition = this.snake.returnCurrentPosition();

        // if statement that checks wether food spawn === snakeHeadSpanw - if so, spawn snake again

        const allPositions = [this.foodSpawnPosition, this.snakeHeadSpawnPosition]
        console.log(allPositions)
        this.syncCurrentFrameToMatrix(allPositions)
    }


    // ---> syncing every element on the canvas to the matrix
    syncCurrentFrameToMatrix(positions) {
        this.tempMatrix = this.matrix;

        positions.forEach((position) => {
            // console.log(position) // logs [undefined, undefined] for snakeHeadSpawnPosition
            this.managePosition(position)
        })

        this.matrix = this.tempMatrix;
        console.log(this.matrix)
    }


    // ---> updates matrix by current frame positions
    updateMatrix() {
        this.getCurrentFramePositions();
    }


}