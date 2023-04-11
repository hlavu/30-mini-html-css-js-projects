const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password1 = document.querySelector("#password1");
const form = document.querySelector("form");
const successModal = document.querySelector(".success");
const welcomeText = document.querySelector(".success h2");

const submitBtn = document.querySelector("#submitBtn");

const showErr = (tag, msg) => {
  let parent = tag.parentElement;
  let small = parent.querySelector("small");
  small.innerText = msg;

  parent.classList.add("err");
};

const resetErr = (...args) => {
  args.forEach((tag) => {
    tag.oninput = (e) => {
      tag.parentElement.classList.remove("err");
    };
  });
};

const checkEmptyInputs = (...args) => {
  let hasEmptyInput = false;
  args.forEach((tag) => {
    trimInput(tag);
    if (!tag.value) {
      showErr(tag, `${tag.placeholder} is required!`);
      hasEmptyInput = true;
    }
  });

  return hasEmptyInput;
};

const validateEmail = (email) => {
  const regEx =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regEx.test(email);
};

const validateInput = (username, email, password, password1) => {
  let passValidation = true;
  // check empty inputs
  if (!checkEmptyInputs(username, email, password, password1)) {
    // check valid email
    if (!validateEmail(email.value)) {
      showErr(email, `Invalid email address!`);
      passValidation = false;
    }

    // check password length
    if (password.value.length < 8) {
      passValidation = false;
      showErr(password, `Password should have at least 8 characters!`);
    } else if (password.value.length > 128) {
      passValidation = false;
      showErr(password, `Password cannot be longer than 128 characters!`);
    }

    // check matching password
    if (password.value !== password1.value) {
      passValidation = false;
      showErr(password1, `Passwords do not match!`);
    }
  }

  return passValidation;
};

const trimInput = (tag) => {
  tag.value = tag.value.trim();
};

submitBtn.onclick = (e) => {
  e.preventDefault();
  // check input
  if (validateInput(username, email, password, password1)) {
    // all inputs are valid
    form.classList.add("hide");
    successModal.classList.add("show");
    welcomeText.textContent = `Welcome ${username.value}!`;
  }
  resetErr(username, email, password, password1);
};
