

setInterval(() => {

    let time = document.querySelector(".time")

    let date = new Date();
    let hours = date.getHours();
    let minu = date.getMinutes();
    let second = date.getSeconds();

    time.textContent = hours + ":" + minu



}, 1000);

let out = document.querySelector(".out")
let give = document.querySelectorAll("#give")
let nour = document.querySelector(".nour")

give.forEach(item => {
    item.addEventListener("click", (eo) => {

        out.value += eo.target.value

        if (out.value != "") {
            nour.style.opacity = "1";
        }

    })
})

let clear = document.querySelectorAll("#clear");

clear.forEach(item => {
    item.addEventListener('click', (eo) => {
        out.value = "";
        nour.style.opacity = "0.4";
    })



})

function calc() {
    try {
        out.value = eval(out.value);
    }
    catch (error) {
        out.value = "error"
    }
}



















