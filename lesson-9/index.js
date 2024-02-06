// const minus= document.querySelector(".minus"),
//     number = document.querySelector(".number"),
//     plus = document.querySelector(".plus");
// let counter = 1;
// plus.addEventListener("click", ()=>{
//     counter++;
//     number.innerHTML = counter
// })
// minus.addEventListener("click", ()=>{
//     if(counter>1){
//         counter--;
//         number.innerHTML = counter
//     }
// } )

function modalShow() {
    modal.classList.add("show")
    modal.classList.remove("hide")
}
function modalHide() {
    modal.classList.add("hide")
    modal.classList.remove("show")
}
const modalBtn = document.querySelector(".open-modal"),
    modal = document.querySelector(".modal"),
    closeModalBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", modalShow)
closeModalBtn.addEventListener("click", modalHide)

