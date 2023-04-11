const main = document.querySelector(".wrapper");

for (var i = 0; i < 200; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    addColor(square);
  });
  square.addEventListener("mouseout", () => {
    removeColor(square);
  });
  main.appendChild(square);
}

const addColor = (el) => {
  const color = randomColor();
  el.style.background = color;
  el.style.boxShadow = `0 0 10px ${color}, 0 0 100px ${color}`;
};

const removeColor = (el) => {
  el.style.background = "#1d1d1d";
  el.style.boxShadow = `0 0 2px #000`;
};

const randomColor = () => {
  const code = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += code[Math.floor(Math.random() * code.length)];
  }
  return color;
};
