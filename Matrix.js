class Matrix {
    constructor(rows, food) {
        this.rows = rows;
        this.food = food;

        // initializes Matrix
        this.matrix = new Array(10).fill(0).map(() => new Array(10).fill(0)); // creates an array out element in the fill() method
    }


    manageCurrentFramePositions(positions) {
        this.tempMatrix = this.matrix;

        positions.forEach((position) => {
            this.managePosition(position)
        })

        this.matrix = this.tempMatrix;
    }

    managePosition(position) {
        let matrixRow = position[0];
        let matrixCol = position[1];

        this.tempMatrix[matrixRow][matrixCol] = 1; // updates matrix on position 'matrixRow' and 'matrixCol'
    }


    // ---> gets current positions of all elements of this current frame
    getCurrentFramePositions() {
        this.foodPosition = this.food.returnSpawnPosition()

        const allPositions = [this.foodPosition]
        this.manageCurrentFramePositions(allPositions)
    }

    // ---> updates matrix by current frame positions
    updateMatrix() {
        this.getCurrentFramePositions();
    }


}