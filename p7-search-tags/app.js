const inputTag = document.querySelector("#new-tag");
const tagList = document.querySelector(".tags-box");

let tagArr = [];

inputTag.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (validateTag(inputTag.value.trim())) {
      createTag();
      tagList.appendChild(inputTag);
    }
    resetInput();
  }
});

const validateTag = (tag) => {
  if (tag !== "" && !tagArr.includes(tag)) {
    tagArr.push(tag);
    return true;
  }

  return false;
};

const createTag = () => {
  tagList.innerHTML = "";
  tagArr.forEach((tag, idx) => {
    let newTag = `<li id=${idx}>${tag} <i class='bx bx-x' onclick="removeTag(this,'${idx}')"></i></li>`;
    tagList.innerHTML += newTag;
  });
};

const removeTag = (tagElem, id) => {
  tagElem.parentNode.remove();
  tagArr.splice(id, 1);
  inputTag.focus();
};

const removeAllTags = () => {
  tagArr = [];
  tagList.innerHTML = "";
  tagList.appendChild(inputTag);
  resetInput();
};

const resetInput = () => {
  inputTag.value = "";
  inputTag.focus();
};
