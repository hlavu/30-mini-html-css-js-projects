const range = document.querySelector(".range");
const process = document.querySelector(".process");
const percent = document.querySelector("span");
const bodyColor = document.querySelector("body");

range.addEventListener("mousemove", function (e) {
  // calculate percent
  const curVal = Math.round(
    ((e.pageX - this.offsetLeft) / this.offsetWidth) * 100
  );

  // e.pageX: distance from the left side of page to mouse pointer
  // offsetLeft: distance from the left side of page to the range element
  // offsetWidth: width of the range element
  renderUI(curVal);
});

const renderUI = (curVal) => {
  process.style.width = `${curVal}%`;
  percent.innerHTML = `${curVal}%`;
  bodyColor.style.background = `rgba(0,0,0,${curVal / 100})`;
};
