const imgPreview = document.querySelector(".preview");
const imgInput = document.querySelector("#img-input");
const img = document.querySelector("img");

imgInput.addEventListener("change", () => {
  imgPreview.innerHTML = `<img src="${URL.createObjectURL(
    imgInput.files[0]
  )}" alt="${imgInput.files[0].name}">`;
});
