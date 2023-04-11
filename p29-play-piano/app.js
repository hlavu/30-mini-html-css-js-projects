const btnList = document.querySelectorAll(".btn");
const current = document.querySelector("p");

btnList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const audio = document.querySelector("audio");
    playNote(audio);
  });
});

const playNote = (audio) => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};

document.addEventListener("keydown", (e) => {
  const target = document.querySelector(`.${e.key}`);

  target?.click();
  if (target) {
    current.innerText = e.key.toUpperCase();
  }
});
