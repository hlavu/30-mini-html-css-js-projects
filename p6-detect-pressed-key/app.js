const keyName = document.querySelector(".key-name");
const keyLocation = document.querySelector(".location");
const whichKey = document.querySelector(".which");
const keyCode = document.querySelector(".code");
const btn = document.querySelector(".btn");
const box = document.querySelector(".box");
const result = document.querySelector(".result");

document.addEventListener("keypress", (e) => {
  btn.classList.add("hide");
  box.classList.toggle("hide", false);
  keyName.innerHTML = e.code.slice(-1);
  keyLocation.innerHTML = e.location;
  console.log(e);
  whichKey.innerHTML = e.keyCode;
  result.innerHTML = e.keyCode;
  keyCode.innerHTML = e.code;
});
