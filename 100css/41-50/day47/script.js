const matrix = [
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,
  0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,
  0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,
  0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

const boardElement = document.querySelector(".board");

matrix.forEach(item => {
const inputElement = document.createElement("input");
inputElement.setAttribute("type", "checkbox");
inputElement.checked = item;
inputElement.classList.add("flicker");

boardElement.appendChild(inputElement);
});