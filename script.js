const navBar = document.querySelector(".navbar");
const side = document.querySelector(".side");
const cross = document.querySelector(".cross");

navBar.addEventListener("click", ()=>{
    side.classList.toggle("active");
    cross.classList.toggle("active");
})

cross.addEventListener("click", ()=>{
    side.classList.toggle("active");
    cross.classList.toggle("active");
})