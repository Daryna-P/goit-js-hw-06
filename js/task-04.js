let counterValue = 0;
const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");
const value = document.querySelector('#value');

function onIncrementBtnClick () {
    counterValue += 1;
    value.textContent = counterValue;
};
function onDecrementBtnClick () {
    counterValue -= 1;
    value.textContent = counterValue;
};

incrementBtn.addEventListener('click', onIncrementBtnClick);
decrementBtn.addEventListener('click', onDecrementBtnClick);