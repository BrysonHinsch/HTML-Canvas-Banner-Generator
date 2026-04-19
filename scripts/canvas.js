
const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');
const state = {};

let record = false; // When true begins recording gif
let frames = 0;     // Number of frames read so far

var encoder = new GIFEncoder();
encoder.setRepeat(0);
encoder.setDelay(1000/60);

// Determines the functionality of the canvas
// Whatever the user types into the text box will replace this function

let canvasFunction = function(canvas, ctx, state) {}

// Calls the animation loop

function canvasLoop() {
    canvasFunction(canvas, ctx, state);
    if (record == true) {
        frames++
        if (frames % 4 == 0) {
            encoder.addFrame(ctx);
        }
        console.log(frames);
        if (frames == 1000) {
            encoder.finish();
            encoder.download("download.gif");
            record = false;
            frames = 0;
        }
    }
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
    record = true;
    encoder.start();
}

// Updates the functionality of the canvas function to what the user has typed in

function updateCanvasFunction() {
    resetCanvas();
    canvasFunction = new Function("canvas", "ctx", "state", document.getElementById("inputbox").value);
    console.log("Canvas Updated");
}

canvasLoop();