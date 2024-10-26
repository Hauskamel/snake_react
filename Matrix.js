class Matrix {
    constructor (rows) {
        this.rows= rows;
        this.twoDimensionalMatrixArray = [
            // Array with each row filled with the numbers of this.cols
        ]
    }


    // -----> initialize 9 empty arrays. Each representing a matrix row
    initialize2dMatrix () {
        // ---> creates 9 empty arrays
        const emptyArrays = Array.from({length: this.rows}, () => []);
        this.twoDimensionalMatrixArray.push(emptyArrays);
    }


    // -----> clears the matrix and fills every element with 0 (0=free cell)
    resetMatrixStatus () {
        console.log(this.twoDimensionalMatrixArray)
    }


}