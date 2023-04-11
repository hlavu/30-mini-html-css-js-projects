const data = [
  {
    title: "DAY 1 - PRODUCT CARD",
    imgSrc: "./assets/img/day1.png",
    url: "./p1-product-card/index.html",
  },
  {
    title: "DAY 2 - PROFILE CARD",
    imgSrc: "./assets/img/day2.png",
    url: "./p2-profile-card/index.html",
  },
  {
    title: "DAY 3 - MODAL CARD",
    imgSrc: "./assets/img/day3.png",
    url: "./p3-modal-card/index.html",
  },
  {
    title: "DAY 4 - IMAGE GALLERY",
    imgSrc: "./assets/img/day4.png",
    url: "./p4-image-gallery/index.html",
  },
  {
    title: "DAY 5 - SEARCH BOX",
    imgSrc: "./assets/img/day5.png",
    url: "./p5-search-box/index.html",
  },
  {
    title: "DAY 6 - DETECT PRESSED KEY",
    imgSrc: "./assets/img/day6.png",
    url: "./p6-detect-pressed-key/index.html",
  },
  {
    title: "DAY 7 - SEARCH TAG",
    imgSrc: "./assets/img/day7.png",
    url: "./p7-search-tags/index.html",
  },
  {
    title: "DAY 8 - SIGN UP FORM",
    imgSrc: "./assets/img/day8.png",
    url: "./p8-sign-up-form/index.html",
  },
  {
    title: "DAY 9 - WEATHER APP",
    imgSrc: "./assets/img/day9.png",
    url: "./p9-weather-app/index.html",
  },
  {
    title: "DAY 10 - TO DO LIST",
    imgSrc: "./assets/img/day10.png",
    url: "./p10-to-do-list/index.html",
  },
  {
    title: "DAY 11 - TOAST NOTIFICATION",
    imgSrc: "./assets/img/day11.png",
    url: "./p11-toast-noti/index.html",
  },
  {
    title: "DAY 12 - RANGE SLIDER",
    imgSrc: "./assets/img/day12.png",
    url: "./p12-range-slider/index.html",
  },
  {
    title: "DAY 13 - PREVIEW IMAGE",
    imgSrc: "./assets/img/day13.png",
    url: "./p13-preview-img/index.html",
  },
  {
    title: "DAY 14 - SLIDE SHOW",
    imgSrc: "./assets/img/day14.png",
    url: "./p14-slide-show/index.html",
  },
  {
    title: "DAY 15 - PRODUCT FILTER",
    imgSrc: "./assets/img/day15.png",
    url: "./p15-product-filter/index.html",
  },
  {
    title: "DAY 16 - SHOW ON SCROLL",
    imgSrc: "./assets/img/day16.png",
    url: "./p16-show-on-scroll/index.html",
  },
  {
    title: "DAY 17 - COUNTER UP",
    imgSrc: "./assets/img/day17.png",
    url: "./p17-counter-up/index.html",
  },
  {
    title: "DAY 18 - DRAG DROP",
    imgSrc: "./assets/img/day18.png",
    url: "./p18-drag-n-drop/index.html",
  },
  {
    title: "DAY 19 - DRAWING APP",
    imgSrc: "./assets/img/day19.png",
    url: "./p19-drawing-app/index.html",
  },
  {
    title: "DAY 20 - TYPING ANIMATION",
    imgSrc: "./assets/img/day20.png",
    url: "./p20-typing-anim/index.html",
  },
  {
    title: "DAY 21 - DARK/LIGHT MODE",
    imgSrc: "./assets/img/day21.png",
    url: "./p21-dark-light-mode/index.html",
  },
  {
    title: "DAY 22 - FILTER ELEMENTS",
    imgSrc: "./assets/img/day22.png",
    url: "./p22-filter-elems/index.html",
  },
  {
    title: "DAY 23 - ZOOM IMAGE",
    imgSrc: "./assets/img/day23.png",
    url: "./p23-zoom-img/index.html",
  },
  {
    title: "DAY 24 - HOVER BOARD",
    imgSrc: "./assets/img/day24.png",
    url: "./p24-hover-board/index.html",
  },
  {
    title: "DAY 25 - CUSTOM VIDEO CONTROL",
    imgSrc: "./assets/img/day25.png",
    url: "./p25-custom-video-play/index.html",
  },
  {
    title: "DAY 26 - VALIDATE PASSWORD",
    imgSrc: "./assets/img/day26.png",
    url: "./p26-validate-password/index.html",
  },
  {
    title: "DAY 27 - TOOLTIP",
    imgSrc: "./assets/img/day27.png",
    url: "./p27-tooltip/index.html",
  },
  {
    title: "DAY 28 - SKELETON LOADING",
    imgSrc: "./assets/img/day28.png",
    url: "./p28-skeleton-loading/index.html",
  },
  {
    title: "DAY 29 - PIANO",
    imgSrc: "./assets/img/day29.png",
    url: "./p29-play-piano/index.html",
  },
  {
    title: "DAY 30 - CAROUSEL",
    imgSrc: "./assets/img/day30.png",
    url: "./p30-simple-carousel/index.html",
  },
];

/**
 * to do tasks:
 *
 * 1--- add github link to each folder
 * 2--- add review form for each project (form will be sent to a specific email)
 * 3--- write a readme file
 *
 * form will have :
 *      title field (auto complete to shows which prj is currently reviewed)
 *      textarea to write review
 *      send btn
 *
 */

const wrapper = document.querySelector(".wrapper");

const renderUI = () => {
  let html = [];

  html = data.map((cardInfo) => {
    return ` <div class="card">
        <div class="img">
          <img src="${cardInfo.imgSrc}" alt="${cardInfo.title}" />
        </div>
        <div class="info">
          <div class="btn">
            <a href="${cardInfo.url}" target="_blank"
              ><i class="bx bx-show-alt"></i
            ></a>
            <a href="#"><i class="bx bxl-github"></i></a>

            <span>
              <i class="bx bx-message-dots"></i>
            </span>
            <span class="heart">
              <i class="bx bx-heart" onclick="fillHeart(this)"></i>
            </span>
          </div>
          <p>${cardInfo.title}</p>
        </div>
      </div>`;
  });

  wrapper.innerHTML = html.join("");
};

const fillHeart = (e) => {
  e.parentElement.innerHTML = `<i class="bx bxs-heart" onclick="emptyHeart(this)"></i>`;
};

const emptyHeart = (e) => {
  e.parentElement.innerHTML = `<i class="bx bx-heart" onclick="fillHeart(this)"></i>`;
};

renderUI();
