
class Grid {
    constructor(canvas, ctx, cellSize) {
        this.canvas= canvas;
        this.ctx= ctx;
        this.cellSize= cellSize;
        this.rows= Math.floor(canvas.height / cellSize);
        this.cols= Math.floor(canvas.width / cellSize);
    }


    // ________________________________________________________________________________________________________________________________________

    // #################### GRID ####################
    // -----> generates rows of grid
    generateGridRows () {
        // draw horizontal lines of the grid
        for (let row = 1; row < this.rows; row++) {
            let y = row * this.cellSize;
            this.ctx.beginPath()
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.strokeStyle = "#ccc" // light grey color
            this.ctx.stroke()
        }
    }


    // -----> generates cols of grid
    generateGridCols () {
        // draw vertical lines of the grid
        for (let col = 1; col < this.cols; col++) {
            let x = col * this.cellSize;
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.strokeStyle = "#ccc"; // light grey color
            this.ctx.stroke();
        }
    }



    // ________________________________________________________________________________________________________________________________________


    // -----> Draw the grid on the canvas
    draw () {
        this.generateGridCols();
        this.generateGridRows();

    }
}