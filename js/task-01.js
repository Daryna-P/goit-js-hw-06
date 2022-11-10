const itemsEl = document.querySelectorAll(`.item`);
console.log (`Number of categories: ${itemsEl.length}`);

 itemsEl.forEach (element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.querySelectorAll("li").length}`);
 })

 // for (let i = 0; i < itemsEl.length; i+=1) {
//     const text = itemsEl[i].querySelector("h2");
//     const itemsInnerEl = itemsEl[i].querySelectorAll("li");
//     console.log (`Category: ${text.textContent}`);
//     console.log (`Elements: ${itemsInnerEl.length}`);
// }