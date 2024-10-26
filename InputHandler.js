class InputHandler {
    constructor() {
    }

    handlePressedKey (e) {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) {
            return e.code;
        }
    }
}