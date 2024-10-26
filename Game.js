document.addEventListener("DOMContentLoaded", () => {


    // ________________________________________________________________________________________________________________________________________

    class Game {
        constructor(inputHandler, canvas, ctx, grid, snake, food) {
            this.gameState = "running" // 3 gameStates: "meu"; "running", "over"
            this.snakeDirection = "left" // standard: snake is moving from right to left when game starts ---> "left", "right", "up", "down"
            this.canvas = canvas;
            this.ctx = ctx;
            this.grid = grid;
            this.snake = snake;
            this.food = food;
            this.cellSize = 50;
        }


        // ________________________________________________________________________________________________________________________________________


        // -----> this function initializes the game by drawing all elements to the canvas.
        //        important here is, that the function is not maintaining the canvas by clearing it at each move
        initializeGame() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.grid.draw();
            // this.snake.draw();

            // ---> Food initialization
            this.food.generateSpawnPosition();
            this.food.draw();
        }


        updateCanvas() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.grid.draw();
            this.snake.draw();
            this.food.draw();
        }


        keyPressed(e) {
            snake.updateSnakeHead(inputHandler.handlePressedKey(e));
            this.updateCanvas();
        }



        snakeMoving() {
            this.snake.snakeParts.forEach(snakePart => {

                // TODO: IMPLEMENT MATRIX LOGIC HERE


                snakePart.x -= this.cellSize;
            })
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
    const matrix= new Matrix(this.rows)
    const grid = new Grid(canvas, ctx, cellSize, matrix);
    const snake = new Snake(canvas, ctx);
    const food = new Food(canvas, ctx)

    // ################# GAME SETUP ###################
    // initializes input handler
    const inputHandler = new InputHandler(this.snakeParts);


    // ________________________________________________________________________________________________________________________________________


    // #################### GAME INIT ####################
    // initialization of the game itself with the canvas context and the game grid as parameters
    const snakeApp = new Game(inputHandler, canvas, ctx, grid, snake, food);
    snakeApp.initializeGame();


    // ________________________________________________________________________________________________________________________________________


    // #################### INTERVAL - UPDATES GAME EVERY 1 SECOND ####################
    // ---> moves the snake forward (in what ever direction the snake is looking forward)
    setInterval(() => {
        // snakeApp.snakeMoving();
        // snakeApp.updateCanvas();
    }, 1000);

    document.addEventListener("keydown", snakeApp.keyPressed.bind(snakeApp))
})