
const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');
const state = {};

// Determines the functionality of the canvas
// Whatever the user types into the text box will replace this function

let canvasFunction = function(canvas, ctx, state) {}

// Calls the animation loop

function canvasLoop() {
    canvasFunction(canvas, ctx, state);
    requestAnimationFrame(canvasLoop);
}

// Sets canvasFunction to display a plain white background

function resetCanvas() {
    canvasFunction = new Function("canvas", "ctx", "state", `
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);`);
    for (let key in state) delete state[key];
    console.log("Canvas reset");
}

// Saves the canvas as a gif
// Will eventually add settings for length and resolution

function saveCanvas() {
    // Will eventually save the canvas as a gif

    console.log("Canvas Saved");
}

// Updates the functionality of the canvas function to what the user has typed in

function updateCanvasFunction() {
    resetCanvas();
    canvasFunction = new Function(document.getElementById("inputbox").value);
    console.log("Canvas Updated");
}

canvasLoop();