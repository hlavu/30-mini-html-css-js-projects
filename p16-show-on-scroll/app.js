const itemList = document.querySelectorAll(".anim");
const box = document.querySelector(".box");

const isInViewport = (item) => {
  // gets window screen size
  const screenHeight =
    window.innerHeight || document.documentElement.clientHeight;
  // gets item position
  const itemPos = item.getBoundingClientRect();
  console.log(item, itemPos.top, itemPos.bottom, screenHeight);
  // compares position of the item  to viewport
  return itemPos.top >= 0 && itemPos.bottom <= screenHeight;
};

const handleAnim = () => {
  itemList.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("start");
    } else {
      item.classList.remove("start");
    }
  });
};

window.onscroll = handleAnim;

handleAnim();
