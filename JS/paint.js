var canvas = document.getElementById("canvas");
var isDrawing = false;
var colorInUse = "black";
var brushSizeInUse = "height: 5px; width: 5px";

var colorButton = document.getElementsByClassName("colors-btn");
for (var i = 0; i < colorButton.length; i++) {
    colorButton[i].addEventListener("click", function (e) {
        var clickedColor = e.target;
        colorInUse = clickedColor.id;
    })
};

var brushSizeButtons = document.getElementsByClassName("brushsize-btn");
for (var i = 0; i < brushSizeButtons.length; i++) {
    brushSizeButtons[i].addEventListener("click", function (e) {
        var clickedBrushSize = e.target;
        brushSizeInUse = clickedBrushSize.id;
        if (brushSizeInUse === "large") {
            brushSizeInUse = "height: 10px; width: 10px";
        } else if (brushSizeInUse === "extra-large") {
            brushSizeInUse = "height: 20px; width: 20px";
        } else {
            brushSizeInUse = "height: 5px; width: 5px";
        }
    })
};

var clearScreenButton = document.getElementById("clear-screen");
clearScreenButton.addEventListener("click", clearTheScreen);
function clearTheScreen() {
    var drawing = document.getElementsByClassName("drawn");
    while (drawing.length > 0) {
        canvas.removeChild(drawing[0]);
    }
};

canvas.addEventListener("mousedown", function () {
    isDrawing = true;
    keepDrawing();
});

function keepDrawing() {
    canvas.addEventListener("mousemove", draw)
};

canvas.addEventListener("mouseup", function () {
    isDrawing = false;
});

function draw(e) {
    if (isDrawing === true) {
        var appendDiv = document.createElement("div");
        appendDiv.classList = colorInUse;
        appendDiv.style = brushSizeInUse;
        appendDiv.classList.add('drawn');
        canvas.appendChild(appendDiv);
        appendDiv.style.top = e.clientY + "px";
        appendDiv.style.left = e.clientX + "px";
    }
};

