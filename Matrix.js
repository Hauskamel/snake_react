class Matrix {
    constructor (rows) {
        this.rows= rows;
        this.initializeMatrix();

    }


    // ---> cleared matrix, every element is 0. Happens only when initialized
    initializeMatrix () {
        this.matrix = new Array(this.rows).fill(0).map(() => new Array(this.rows).fill(0)); // creates an array out element in the fill() method
    }





}