document.addEventListener("DOMContentLoaded", () => {


    // ________________________________________________________________________________________________________________________________________



    // #################### CANVAS ####################
    // size of each sell on the canvas
    const cellSize = 50;

    // Get the canvas and context
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // init of elements on the canvas
    const grid = new Grid(canvas, ctx, cellSize);
    const snake = new Snake(canvas, ctx);
    const food = new Food(canvas, ctx)

    // ################## GAME SETUP ##################
    // initializes input handler
    const inputHandler = new InputHandler(canvas, ctx, cellSize);

    // ________________________________________________________________________________________________________________________________________


    class Game {
        constructor(inputHandler, canvas, ctx, grid, snake, food) {
            this.inputHandler = inputHandler
            this.canvas = canvas;
            this.ctx = ctx;
            this.grid = grid;
            this.snake = snake;
            this.food = food;
        }


        // ________________________________________________________________________________________________________________________________________

        // #################### GAME SETUP ####################
        // -----> this function initializes the game by drawing all elements to the canvas.
        //        important here is, that the function is not maintaining the canvas by clearing it at each move
        initializeGame() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.grid.draw();
            this.snake.draw();

            // ---> Food initialization
            this.food.generatePosition();
            this.food.draw();
        }

        updateCanvas() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.snake.draw();
            this.food.draw();
        }

        handlePressedKey (e) {
            if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) {
                let key = e.code;
                switch (key) {

                }
            }

            this.updateCanvas();
        }


    }


    // initialization of the game itself with the canvas context and the game grid as parameters
    const snakeTheGame = new Game(inputHandler, canvas, ctx, grid, snake, food);
    snakeTheGame.initializeGame();

    document.addEventListener("keydown", snakeTheGame.handlePressedKey)

})