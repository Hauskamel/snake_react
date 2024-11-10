class Snake {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
    }

    // generates the head of the snake which is the base of the entire snake.
    // method only executes at game initialisation.
    generateHeadSpawnPosition () {
        this.row = Math.floor(Math.random() * 10)
        this.col = Math.floor(Math.random() * 10)
        this.returnHeadSpawnPosition(this.row, this.col)
    }


    returnHeadSpawnPosition () {
        return [this.row, this.col]
    }



    draw () {

    }

}