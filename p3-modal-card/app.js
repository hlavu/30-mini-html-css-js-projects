const modal = document.querySelector("#modal-container");
const openModalBtn = document.querySelector("#open-modal");
const iconCloseModal = document.querySelector("#x-btn");
const buttonCloseModal = document.querySelector("#close-btn");

function handleShowModal() {
  modal.classList.toggle("hide");
}

openModalBtn.addEventListener("click", handleShowModal);
iconCloseModal.addEventListener("click", handleShowModal);
buttonCloseModal.addEventListener("click", handleShowModal);

modal.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) handleShowModal();
});
