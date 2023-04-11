const fullImg = document.querySelector(".full-img");
const listImg = document.querySelectorAll(".carousel img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let currentIdx = 0;

listImg.forEach((img, key) => {
  img.addEventListener("click", () => {
    currentIdx = key;
    renderUI(img.src, img);
  });
});

next.addEventListener("click", () => {
  nextIdx();
  renderUI(listImg[currentIdx].src, listImg[currentIdx]);
});
prev.addEventListener("click", () => {
  prevIdx();
  //   console.log(listImg[currentIdx]);
  renderUI(listImg[currentIdx].src, listImg[currentIdx]);
});

const renderUI = (src, img) => {
  fullImg.src = src;
  document.querySelector(".active").classList.toggle("active", 0);
  img.parentElement.classList.toggle("active", 1);
};

const prevIdx = () => {
  currentIdx--;

  if (currentIdx === -1) {
    currentIdx = listImg.length - 1;
  }
};

const nextIdx = () => {
  currentIdx++;

  if (currentIdx === listImg.length) {
    currentIdx = 0;
  }
};
