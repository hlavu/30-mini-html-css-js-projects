const img = document.querySelector(".img");
const title = document.querySelector("h2");

const content = document.querySelector("p");

const btn = document.querySelector("button");

setTimeout(() => {
  const loading = document
    .querySelectorAll(".loading")
    .forEach((item) => item.classList.remove("loading"));
  console.log(loading);
  img.innerHTML = `
    <img src="./assets/cover.jpg" alt="spyxfamily" />;
    `;
  title.innerText = "Spy x family";
  content.innerText =
    "  A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together.";
  btn.innerText = "Watch";
}, 4000);
