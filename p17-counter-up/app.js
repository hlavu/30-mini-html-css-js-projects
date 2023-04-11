const boxList = document.querySelectorAll(".box");

boxList.forEach((box) => {
  let count = 0;
  let target = parseInt(box.querySelector(".number").innerText);
  let step = Math.round(target / 250);

  const runner = setInterval(() => {
    count += step;
    if (count > target) {
      box.querySelector(".number").innerText = target;
    } else {
      box.querySelector(".number").innerText = count;
    }
  }, 1);
});
