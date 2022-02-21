let getBars = document.querySelector(".nav-bar svg");
let navLinks = document.querySelector("nav ul ");

getBars.addEventListener("click",()=>{
    navLinks.classList.toggle("nav-linkshow");
})