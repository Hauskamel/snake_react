document.addEventListener("DOMContentLoaded", () => {

    class Game {
        constructor(inputHandler, canvas, ctx, grid, snake, food, matrix) {
            this.gameState = "running" // 3 gameStates: "meu"; "running", "over"
            this.snakeDirection = "left" // standard: snake is moving from right to left when game starts ---> "left", "right", "up", "down"
            this.canvas = canvas;
            this.ctx = ctx;
            this.grid = grid;
            this.snake = snake;
            this.food = food;
            this.matrix = matrix
        }


        // ________________________________________________________________________________________________________________________________________


        // -----> this function initializes the game by drawing all elements to the canvas.
        //        important here is, that the function is not maintaining the canvas by clearing it at each move
        initializeGame() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.grid.draw();

            // ---> Food initialization
            this.food.generateSpawnPosition();

            // ---> snake initialization
            this.snake.generateHeadSpawnPosition();

            // ---> updates 2d matrix filled with '0's and '1's
            this.matrix.updateMatrix();

            snakeApp.updateCanvas();

            matrix.drawElementsToCanvas();
        }


        updateCanvas() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.grid.draw();
            this.snake.draw();
            this.food.draw();
        }

    }










    // ________________________________________________________________________________________________________________________________________

    // ######################################## GAME SETUP ########################################

    // #################### CANVAS ####################
    // size of each sell on the canvas
    const cellSize = 50;

    // Get the canvas and context
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // init of elements on the canvas
    const grid = new Grid(canvas, ctx, cellSize);
    const snake = new Snake(canvas, ctx);
    const food = new Food(canvas, ctx);

    // the matrix
    // calculates which cell is colored and will be colored next
    const matrix= new Matrix(this.rows, food, snake)

    // ################# GAME SETUP ###################
    // initializes input handler
    const inputHandler = new InputHandler(this.snakeParts);


    // ________________________________________________________________________________________________________________________________________


    // #################### GAME INIT ####################
    // initialization of the game itself with the canvas context and the game grid as parameters
    const snakeApp = new Game(inputHandler, canvas, ctx, grid, snake, food, matrix);
    snakeApp.initializeGame();




    // FIXME: --- BITTE NOCHMAL PRÜFEN ---
    // document.addEventListener("keydown", snakeApp.updateCanvas)


    // ________________________________________________________________________________________________________________________________________

})