const imgContainer = document.querySelectorAll(".img-container img");
const gallery = document.querySelector(".gallery");
const target = document.querySelector("#target");
let currentIdx;

imgContainer.forEach((img) => {
  img.addEventListener("click", showGallery);
});

function showGallery(e) {
  target.src = e.currentTarget.src;
  currentIdx = Array.from(imgContainer).findIndex(
    (img) => img.src === target.src
  );
  if (currentIdx == 0) {
    document.querySelector(".to-left").classList.add("hidden");
  } else if (currentIdx == imgContainer.length - 1) {
    document.querySelector(".to-right").classList.add("hidden");
  }
  gallery.classList.toggle("hidden");
}

function closeImg() {
  gallery.classList.toggle("hidden");
}

function toLeft() {
  document.querySelector(".to-right").classList.remove("hidden");
  if (currentIdx < 1) {
    document.querySelector(".to-left").classList.add("hidden");
  } else {
    target.src = imgContainer[--currentIdx].src;
    if (currentIdx == 0) {
      document.querySelector(".to-left").classList.add("hidden");
    }
  }
}

function toRight() {
  document.querySelector(".to-left").classList.remove("hidden");
  if (currentIdx < imgContainer.length) {
    target.src = imgContainer[++currentIdx].src;
    if (currentIdx == imgContainer.length - 1) {
      document.querySelector(".to-right").classList.add("hidden");
    }
  } else {
    document.querySelector(".to-right").classList.add("hidden");
  }
}
