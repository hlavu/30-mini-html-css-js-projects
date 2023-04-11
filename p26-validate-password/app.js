const hidePwBtn = document.querySelector(".bx.bx-hide");
const showPwBtn = document.querySelector(".bx.bx-show");
const input = document.querySelector("#password");
let count = 0;

const form = document.querySelector(".input-control");

const lowercase = document.querySelector(".lowercase").classList;
const uppercase = document.querySelector(".uppercase").classList;
const number = document.querySelector(".number").classList;
const special = document.querySelector(".special").classList;
const length = document.querySelector(".length").classList;

hidePwBtn.addEventListener("click", () => {
  hidePwBtn.classList.toggle("active", false);
  showPwBtn.classList.toggle("active", true);
  input.type = "text";
});

showPwBtn.addEventListener("click", () => {
  showPwBtn.classList.toggle("active", false);
  hidePwBtn.classList.toggle("active", true);
  input.type = "password";
});

input.addEventListener("input", (e) => {
  e.target.value = e.target.value.trim();
  validatePw(e.target.value.trim());
});

const validatePw = (input) => {
  //check lowercase
  /[a-z]/.test(input)
    ? renderUI(lowercase, "add")
    : renderUI(lowercase, "remove");

  // check uppercase
  /[A-Z]/.test(input)
    ? renderUI(uppercase, "add")
    : renderUI(uppercase, "remove");

  // check special characters
  /\W/.test(input) ? renderUI(special, "add") : renderUI(special, "remove");

  // check number
  /\d/.test(input) ? renderUI(number, "add") : renderUI(number, "remove");

  //check length
  input.length >= 8 ? renderUI(length, "add") : renderUI(length, "remove");
};

const renderUI = (elem, action) => {
  if (action === "add") {
    elem.add("satisfied");
    document
      .querySelector(`.${elem[0]} .bx-x`)
      .classList.toggle("active", false);
    document
      .querySelector(`.${elem[0]} .bx-check`)
      .classList.toggle("active", true);
    count++;
  } else {
    elem.remove("satisfied");
    document
      .querySelector(`.${elem[0]} .bx-x`)
      .classList.toggle("active", true);
    document
      .querySelector(`.${elem[0]} .bx-check`)
      .classList.toggle("active", false);
    count--;
  }
};
