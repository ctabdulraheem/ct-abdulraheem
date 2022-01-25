let menuIcon = document.getElementsByClassName("menu-icon")[0];

menuIcon.addEventListener("click", (e)=>{
    document.querySelector(".nav-link").classList.toggle("showmenu")
})