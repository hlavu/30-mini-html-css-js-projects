const successBtn = document.querySelector(".btn.success");
const warnBtn = document.querySelector(".btn.warning");
const errorBtn = document.querySelector(".btn.error");
const toastList = document.querySelector(".toast-list");

successBtn.addEventListener("click", () => {
  addToast("success");
});

warnBtn.addEventListener("click", () => {
  addToast("warning");
});

errorBtn.addEventListener("click", () => {
  addToast("error");
});

const addToast = (status) => {
  const newToast = document.createElement("div");
  newToast.className = `toast ${status}`;
  let toastContent;
  switch (status) {
    case "success":
      toastContent = `  <i class="fa-sharp fa-solid fa-circle-check"></i>
          <span>This is a success message!</span>`;
      break;
    case "warning":
      toastContent = `   <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
        <span>This is a warning message!</span>`;
      break;
    case "error":
      toastContent = `   <i class="fa-solid fa-triangle-exclamation"></i>
        <span>This is an error message!</span>`;
      break;
  }

  newToast.innerHTML = `${toastContent}   <span class="count-down"></span>`;
  toastList.appendChild(newToast);

  setTimeout(() => {
    newToast.style.animation = "Hide 1s ease forwards";
  }, 4000);

  setTimeout(() => {
    newToast.remove();
  }, 6000);
};
