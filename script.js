const sketchTable = document.querySelector('.sketchTable');
const resetButton = document.querySelector('.reset');
let color = document.querySelector("#color");
const eraser = document.querySelector("#eraser");

for (let i = 0; i <2048; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("square");
    sketchTable.appendChild(newDiv);
}

const square = document.querySelectorAll(".square");

eraser.addEventListener("click", () => {
    for (let each of square) {
        each.addEventListener("mouseover", () => {
            each.style.backgroundColor = "white";
        })
    } 
})
color.addEventListener("click", () => {
    for (let each of square) {
        each.addEventListener('mouseover', () => {
            each.style.backgroundColor = color.value;
        }) 
    } console.log(color.value);
})

resetButton.addEventListener('click', () => {
    for(let each of square) {
        each.style.backgroundColor = "white";
    }
})