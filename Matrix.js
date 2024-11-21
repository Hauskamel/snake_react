class Matrix {
    constructor(rows, food, snake) {
        this.rows = rows;
        this.food = food;
        this.snake = snake;

        this.gameInit = 1;

        this.allPositions = [];

        // initializes Matrix
        this.matrix = new Array(10).fill(0).map(() => new Array(10).fill(0)); // creates an array out element in the fill() method
    }



    initializeMatrix () {
        // -> returns spawn position of apple.
        // Because the apple does not move and stays where it spawns, the spawnPosition is enough to return (no 'currentPosition' needed)
        this.foodSpawnPosition = this.food.returnActualSpawnIndex();
        // -> returns current snake position.
        // -> Because the snake needs to be updated (based on the players input) the current position is required to update the matrix accordingly.
        // TODO: Replace snakeHeadPosition with entire snake positions array - the snake functionality is only written in the 'Snake' class
        // TODO: BUT KEEP snakeHeadSpawnPosition VARIABLE DUE TO USAGE FURTHER DOWN
        this.snakeHeadSpawnPosition = this.snake.returnHeadSpawnPosition();

        // if statement that checks wether food spawn === snakeHeadSpawn - if so, spawn apple again
        if (this.foodSpawnPosition.includes(this.snakeHeadSpawnPosition[1])) {
            this.food.ctx.clearRect(0, 0, this.food.canvas.width, this.food.canvas.height)
            this.food.generateSpawnPosition();
        }

        // initializes snake based on the snake head spawn position
        this.snake.initializeSnake();

        this.foodPosition = this.foodSpawnPosition;
        // this.snakePositions =

    }



    // ---> gets current positions of all elements of this current frame
    getCurrentFramePositions() {
        // check if game initialization to initialize matrix;
        if (this.gameInit===1){
            console.log("initializing matrix")
            this.initializeMatrix();
            console.log("matrix initialized")
            this.gameInit=0;
        }

        this.allPositions = [this.foodSpawnPosition, this.snakeHeadSpawnPosition]
        this.syncCurrentFrameToMatrix(this.allPositions);
    }



    managePosition(position) {
        let matrixRow = position[0];
        let matrixCol = position[1];
        this.tempMatrix[matrixRow][matrixCol] = 1; // updates matrix on position 'matrixRow' and 'matrixCol'
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


    drawElementsToCanvas () {
        // Things necessary
        console.log(this.matrix)
    }




}