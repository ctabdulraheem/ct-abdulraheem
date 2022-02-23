let menuBar = document.querySelector(".menu-bar");
let sideMenu = document.querySelector(".side-menu");
let closeMenu = document.querySelector(".close-menu");

menuBar.addEventListener("click",()=>{
    sideMenu.style.width = "250px";
})
closeMenu.addEventListener("click",()=>{
    sideMenu.style.width = "0px";
})