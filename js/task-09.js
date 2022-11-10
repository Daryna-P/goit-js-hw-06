function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

btnChangeColor.addEventListener("click", onBtnClick);

function onBtnClick (event) {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  textColor.textContent = currentColor;
}