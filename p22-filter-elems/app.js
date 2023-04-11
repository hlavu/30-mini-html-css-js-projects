const btnList = document.querySelectorAll(".nav button");
const listItem = document.querySelector(".list");

const data = [
  {
    category: "cake",
    url: "./assets/img/cake2.jpg",
  },
  {
    category: "fruit",
    url: "./assets/img/fruit1.jpg",
  },
  {
    category: "drink",
    url: "./assets/img/drink1.jpg",
  },
  {
    category: "fruit",
    url: "./assets/img/fruit2.jpg",
  },
  {
    category: "cake",
    url: "./assets/img/cake1.jpg",
  },
  {
    category: "drink",
    url: "./assets/img/drink2.jpg",
  },
  {
    category: "cake",
    url: "./assets/img/cake3.jpg",
  },

  {
    category: "drink",
    url: "./assets/img/drink3.jpg",
  },
];

btnList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.toggle("active");
    sortData(e.target.id);
  });
});

const sortData = (category) => {
  var sortedList = [];

  if (category === "all") {
    sortedList = data;
  } else {
    sortedList = data.filter((data) => data.category === category);
  }
  renderUI(sortedList);
};

const renderUI = (dataList) => {
  var htmlData = [];

  htmlData = dataList.map((data) => {
    return `<div class="item"><img src="${data.url}" alt="${data.category}"/></div>`;
  });

  listItem.innerHTML = htmlData.join(``);
};

renderUI(data);
