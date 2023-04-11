const input = document.querySelector("#input-content");
const itemList = document.querySelector(".item-list");
const btn = document.querySelector("#add-btn");
const greeting = document.querySelector(".greeting");
const modal = document.querySelector(".modal");
const yesBtn = document.querySelector(".btn.yes-btn");
const noBtn = document.querySelector(".btn.no-btn");

/**
 * Task left:
 * save input to local storage
 * create error toast for existed task
 *
 */

let taskList = [];
let deletedId;

const validateInput = () => {
  if (input.value.trim() !== "") {
    if (!taskList.includes(input.value.trim())) {
      taskList.push(input.value.trim());
    } else {
      console.warn("Task is existed!");
      // show err toast
    }
    input.value = "";
  }
};

const hideModal = () => {
  modal.classList.toggle("hide", 1);
};

const showModal = (id) => {
  modal.classList.toggle("hide", 0);
  deletedId = id;
};

const deleteItem = () => {
  taskList.splice(deletedId, 1);
  hideModal();
  renderUI();
};

const renderUI = () => {
  if (taskList.length) {
    let newArr = taskList.map(
      (task, id) =>
        `<div class="item" key=${id} >
                <p class="content">${task}</p>
                <i class="bx bx-trash" onClick=showModal(${id})></i>
              </div>`
    );
    let html = newArr.join("");
    itemList.innerHTML = html;
  } else {
    console.log(greeting);
    itemList.innerHTML = "";
    itemList.appendChild(greeting);
  }
};

input.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    validateInput();
    renderUI();
  }
});

btn.addEventListener("click", validateInput);
yesBtn.addEventListener("click", deleteItem);
noBtn.addEventListener("click", hideModal);
