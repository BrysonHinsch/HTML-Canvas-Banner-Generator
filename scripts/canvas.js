
function resetCanvas() {
    const canvas = document.getElementById("mainCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    console.log("Canvas Reset");
}

function saveCanvas() {
    console.log("Canvas Saved");
}

function updateCanvas() {
    console.log("Canvas Updated");
}