const color = document.querySelector("#color");
const eraser = document.querySelector("#eraser");
const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");
const clear = document.querySelector("#clear");
const save = document.querySelector("#save");
const canvas = document.querySelector("#canvas");
const penSize = document.querySelector("#pen-size");

var currentPenSize = 10;
var brushColor = "#000";
var pos1 = {};
var pos2 = {};
var isDrawing = false;
var isErasing = false;

// changes brush color
color.addEventListener("change", (e) => {
  brushColor = e.target.value;
  if (isErasing) {
    isErasing = false;
    eraser.classList.remove("active");
  }
});

// erases strokes
eraser.addEventListener("click", (e) => {
  isErasing = !isErasing;
  if (isErasing) {
    brushColor = "#fff";
    eraser.classList.add("active");
  } else {
    eraser.classList.remove("active");
    brushColor = color.value;
  }
});

// increases brush size
inc.addEventListener("click", () => {
  currentPenSize = parseInt(penSize.innerText) + 5;
  currentPenSize > 30
    ? (penSize.innerText = currentPenSize = 30)
    : (penSize.innerText = currentPenSize);
});

// decreases brush size
dec.addEventListener("click", () => {
  currentPenSize = parseInt(penSize.innerText) - 5;

  currentPenSize < 5
    ? (penSize.innerText = currentPenSize = 5)
    : (penSize.innerText = currentPenSize);
});

// clears canvas
clear.addEventListener("click", (e) => {
  ctx.clearRect(0, 0, 1200, 650);
});

// saves image
save.addEventListener("click", (e) => {
  var img = canvas.toDataURL("image/png", 1.0);
  save.href = img;
});

// creates a drawing object
var ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", (e) => {
  pos1 = {
    x: e.offsetX,
    y: e.offsetY,
  };
  isDrawing = true;
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    pos2 = {
      x: e.offsetX,
      y: e.offsetY,
    };
    drawing();
  }
});

document.addEventListener("mouseup", () => {
  isDrawing = false;
});

const drawing = () => {
  // draws circle
  ctx.beginPath();
  ctx.arc(pos1.x, pos1.y, currentPenSize, 0, Math.PI * 2);
  ctx.fillStyle = brushColor;

  ctx.fill();

  // draws straight line
  ctx.beginPath();
  ctx.moveTo(pos1.x, pos1.y);
  ctx.lineTo(pos2.x, pos2.y);
  ctx.lineWidth = currentPenSize * 2;
  ctx.strokeStyle = brushColor;
  ctx.stroke();

  pos1.x = pos2.x;
  pos1.y = pos2.y;
};
