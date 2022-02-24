let loading = document.getElementsByClassName("lodaing-container")[0];
let mainContent = document.getElementsByClassName("main-content")[0];

function load(){
    setTimeout( () =>{
        loading.style.opacity = 0;
        loading.style.display = "none";

        mainContent.style.display = "block";
        setTimeout(()=>{
            mainContent.style.opacity = "1";
        },500)
    },3000)
}

load()