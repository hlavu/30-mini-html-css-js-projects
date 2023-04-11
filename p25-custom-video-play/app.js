// const
const wrapper = document.querySelector(".wrapper");
const controller = document.querySelector(".video-control");
const video = document.querySelector(".video");

const playBtn = document.querySelector(".playBtn");
const timer = document.querySelector(".timer");
const progress = document.querySelector(".progress");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const volume = document.querySelector("#volume");
const volumeBox = document.querySelector(".volume");

let isPlay = false;

wrapper.addEventListener("mousemove", () => {
  controller.classList.add("active");
});

wrapper.addEventListener("mouseout", () => {
  controller.classList.remove("active");
});

// handles play/pause video
playBtn.addEventListener("click", () => {
  isPlay = !isPlay;
  if (isPlay === true) {
    video.volume = volume.value / 100;
    playBtn.innerHTML = `<i class="bx bx-stop"></i>`;
    video.play();
  } else {
    playBtn.innerHTML = `<i class="bx bx-play"></i>`;
    video.pause();
  }
});

video.addEventListener("click", () => {
  playBtn.click();
});

// prev 10s
prev.addEventListener("click", () => {
  let newTime = video.currentTime - 10;
  video.currentTime = newTime > 0 ? newTime : 0;
  updateTimer(video.duration, video.currentTime);
});

// next 10s
next.addEventListener("click", () => {
  let newTime = video.currentTime + 10;
  video.currentTime = newTime > video.duration ? video.duration : newTime;
  updateTimer(video.duration, video.currentTime);
});

// displays timer
const updateTimer = (length, curLength) => {
  // calculates video length
  let totalMin = Math.floor(length / 60);
  let totalSec = (length - totalMin * 60).toFixed();

  let curMin = Math.floor(curLength / 60);
  let curSec = (curLength - curMin * 60).toFixed();

  if (curSec == 60) {
    curSec = 59;
  }

  timer.innerHTML = `0${curMin}:${
    curSec > 9 ? curSec : `0${curSec}`
  }/0${totalMin}:${totalSec > 9 ? totalSec : `0${totalSec}`}`;
};

progress.addEventListener("click", (e) => {
  //e.offsetX : distance from cursor to target border
  // e.target.clientWidth: target width
  let percent = Math.round((e.offsetX / e.target.clientWidth) * 100);
  let newTime = (percent * video.duration) / 100;
  video.currentTime = newTime;
  updateTimer(video.duration, video.currentTime);
  progress.style.background = `linear-gradient(90deg, #7ca2e8 ${percent}%, #fff ${percent}%)`;
});

const updateProgressBar = () => {
  let percent = Math.round((video.currentTime / video.duration) * 100);
  progress.style.background = `linear-gradient(90deg, #7ca2e8 ${percent}%, #fff ${percent}%)`;
};

// changes volume
volume.addEventListener("input", (e) => {
  video.volume = e.target.value / 100;
  let newNode = document.createElement("i");

  video.volume == 0.0
    ? newNode.classList.add("bx", "bx-volume-mute")
    : video.volume >= 0.5
    ? newNode.classList.add("bx", "bxs-volume-full")
    : newNode.classList.add("bx", "bx-volume-low");
  volumeBox.replaceChild(newNode, volumeBox.querySelector("i"));
});

video.ontimeupdate = () => {
  updateTimer(video.duration, video.currentTime);
  updateProgressBar();
};

video.onended = () => {
  // resets current state
  playBtn.click();
};
