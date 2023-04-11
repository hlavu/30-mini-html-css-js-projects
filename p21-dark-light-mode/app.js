const switcher = document.querySelector(".btn");
var isDarkMode;

switch (localStorage.getItem("isDarkMode")) {
  case "true":
    isDarkMode = true;
    break;
  case "false":
    isDarkMode = false;
    break;
  default:
    isDarkMode = true;
}

switcher.addEventListener("click", (e) => {
  isDarkMode = !isDarkMode;
  localStorage.setItem("isDarkMode", isDarkMode);
  document.querySelector("body").classList.toggle("light-mode");
});

if (localStorage.getItem("isDarkMode") === "false") {
  document.querySelector("body").classList.add("light-mode");
}
