const destList = document.querySelectorAll(".box");
const target = document.querySelector(".target");

destList.forEach((dest) => {
  dest.addEventListener("dragover", () => {
    dest.appendChild(target);
  });
});

target.addEventListener("dragstart", () => {
  target.classList.add("dragging");
});

target.addEventListener("dragend", () => {
  target.classList.remove("dragging");
});
