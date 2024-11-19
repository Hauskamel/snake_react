class Matrix {
    constructor(rows, food, snake) {
        this.rows = rows;
        this.food = food;
        this.snake = snake;

        // initializes Matrix
        this.matrix = new Array(10).fill(0).map(() => new Array(10).fill(0)); // creates an array out element in the fill() method
    }

    // ---> gets current positions of all elements of this current frame
    getCurrentFramePositions() {
        // -> returns spawn position of apple.
        // Because the apple does not move and stays where it spawns, the spawnPosition is enough to return (no 'currentPosition' needed)
        this.foodSpawnPosition = this.food.returnActualSpawnIndex()
        // -> returns current snake position.
        // -> Because the snake needs to be updated (based on the players input) the current position is required to update the matrix accordingly.
        // TODO: Replace snakeHeadPosition with entire snake positions array - the snake functionality is only written in the 'Snake' class
        this.snakeHeadSpawnPosition = this.snake.returnHeadSpawnPosition()
        // this.snakePosition = this.snake.returnCurrentPosition();

        // if statement that checks wether food spawn === snakeHeadSpawn - if so, spawn snake again
        if (this.foodSpawnPosition.includes(this.snakeHeadSpawnPosition[1])) {
            this.food.generateSpawnPosition();
        }

        const allPositions = [this.foodSpawnPosition, this.snakeHeadSpawnPosition]
        this.syncCurrentFrameToMatrix(allPositions)
    }


    managePosition(position) {
        let matrixRow = position[0];
        let matrixCol = position[1];
        this.tempMatrix[matrixRow][matrixCol] = 1; // updates matrix on position 'matrixRow' and 'matrixCol'
        console.log(this.tempMatrix)
    }


    // ---> syncing every element on the canvas to the matrix
    syncCurrentFrameToMatrix(positions) {
        this.tempMatrix = this.matrix;

        positions.forEach((position) => {
            this.managePosition(position)
        })

        this.matrix = this.tempMatrix;
    }


    // ---> updates matrix by current frame positions
    updateMatrix() {
        this.getCurrentFramePositions();
    }


}