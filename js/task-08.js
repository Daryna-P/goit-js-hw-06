
const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    for (const [name, value] of formData.entries()) {
        if (value.trim() === "") {
            return alert("всі поля повинні бути заповнені");
        }
    }
    
    const dataObj = {};

    for (let element of event.currentTarget.elements) {
        if (element.name) dataObj[element.name] = element.value;
      }
    console.log(dataObj);
    event.currentTarget.reset();
}



// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.+
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.