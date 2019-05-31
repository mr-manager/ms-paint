var canvas = document.getElementById("canvas");
var isDrawing = false;

canvas.addEventListener("mousedown", function() {
    isDrawing = true;
    keepDrawing();
});

function keepDrawing() {
    canvas.addEventListener("mousemove", draw)
}

canvas.addEventListener("mouseup", function() {
    isDrawing = false;
});

function draw(e) {
    if (isDrawing === true) {
        var x = e.clientX;
        var y = e.clientY;
        var coordinates = `X coordinates are ${x} and Y coordinates are ${y}`
        console.log(coordinates);

        var appendDiv = document.createElement("div");
        appendDiv.classList = "black";
        canvas.appendChild(appendDiv);
        appendDiv.style.top = e.clientY + "px";
        appendDiv.style.left = e.clientX + "px";
    }
}

