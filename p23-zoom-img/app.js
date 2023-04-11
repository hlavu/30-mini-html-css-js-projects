// create a box which moves along with mouse
const img = document.querySelector(".image");
const cursor = document.querySelector(".cursor");

img.addEventListener("mousemove", (e) => {
  cursor.classList.remove("hide");
  // gets cursor position
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;

  // gets distance from cursor to border
  // pageX: distance for cursor to screen
  // offsetLeft: distance from border to screen
  var cursorToBorderX = e.pageX - e.target.offsetLeft;
  var cursorToBorderY = e.pageY - e.target.offsetTop;
  console.log(e.pageX, e.target.offsetLeft);

  // width and height of img
  var w = e.target.clientWidth;
  var h = e.target.clientHeight;

  // calculates % to set position
  var perW = (cursorToBorderX / w) * 100;
  var perH = (cursorToBorderY / h) * 100;

  cursor.style.backgroundPosition = `${perW}% ${perH}%`;
});

img.addEventListener("mouseleave", () => {
  cursor.classList.add("hide");
});
