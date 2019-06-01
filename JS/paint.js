var canvas = document.getElementById("canvas");
var isDrawing = false;
var colorInUse = "black";
var brushSizeInUse = "height: 5px; width: 5px";

var colorButton = document.getElementsByClassName("colors-btn");
for(var i = 0; i < colorButton.length; i++) {
    colorButton[i].addEventListener("click", function(e) {
        var clickedColor = e.target;
        colorInUse = clickedColor.id;
        console.log(colorInUse);
    })
};

var brushSizeButtons = document.getElementsByClassName("brushsize-btn");
for (var i = 0; i < brushSizeButtons.length; i++) {
    brushSizeButtons[i].addEventListener("click", function(e){
        var clickedBrushSize = e.target;
        brushSizeInUse = clickedBrushSize.id;
        if(brushSizeInUse === "large") {
            brushSizeInUse = "height: 10px; width: 10px";
        } else if(brushSizeInUse === "extra-large"){
            brushSizeInUse = "height: 20px; width: 20px";
        } else {
            brushSizeInUse = "height: 5px; width: 5px";
        }
        console.log(brushSizeInUse);
    })
};

canvas.addEventListener("mousedown", function () {
    isDrawing = true;
    keepDrawing();
})

function keepDrawing() {
    canvas.addEventListener("mousemove", draw)
}

canvas.addEventListener("mouseup", function () {
    isDrawing = false;
})

function draw(e) {
    if (isDrawing === true) {
        var x = e.clientX;
        var y = e.clientY;
        var coordinates = `X coordinates are ${x} and Y coordinates are ${y}`
        console.log(coordinates);

        var appendDiv = document.createElement("div");
        appendDiv.classList = colorInUse;
        appendDiv.style = brushSizeInUse;
        canvas.appendChild(appendDiv);
        appendDiv.style.top = e.clientY + "px";
        appendDiv.style.left = e.clientX + "px";
    }
};

