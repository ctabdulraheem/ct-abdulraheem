// Navigation
let menuBar = document.getElementsByClassName("menu-bar")[0];
let nav = document.querySelector("nav");
menuBar.addEventListener("click",(e)=>{
    nav.classList.toggle("nav-open");
});

//Download Btn
let heroDownloadbtn = document.getElementsByClassName("hero-downloadbtn")[0];
let templateDownloadbtn = document.getElementsByClassName("template-downloadbtn")[0];

let overlay = document.getElementsByClassName("overlay")[0];
let overlayClosebtn = document.getElementsByClassName("overlay-closebtn")[0];

heroDownloadbtn.addEventListener("click",(e)=>{
    overlay.classList.add("overlay-active")
})
templateDownloadbtn.addEventListener("click",(e)=>{
    overlay.classList.add("overlay-active")
})
overlayClosebtn.addEventListener("click",(e)=>{
    overlay.classList.remove("overlay-active")
});
