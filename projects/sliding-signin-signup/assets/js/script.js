let signupbtn = document.querySelector(".card-signIn button");
let signinbtn = document.querySelector(".card-signUp button");

let colSignin = document.querySelector(".col-signin");
let colSignup = document.querySelector(".col-signup");

signupbtn.addEventListener("click",()=>{
    colSignup.classList.add("col-active");
    colSignin.classList.add("col-deactive");
    colSignin.classList.remove("col-active");
});

signinbtn.addEventListener("click",()=>{
    colSignup.classList.remove("col-active");
    colSignin.classList.remove("col-deactive");
    colSignin.classList.add("col-active");
});
