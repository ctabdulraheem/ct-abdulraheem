let profileImg = document.getElementsByClassName("profile-img")[0]
let profile_fName = document.querySelector(".fname p"); //First name
let profile_lName = document.querySelector(".lname p"); //last name
let profile_email = document.querySelector(".email p"); //email name
let profile_dob = document.querySelector(".dob p"); //dob name
let profile_age = document.querySelector(".age p"); //age name
let profile_location = document.querySelector(".location p"); //location name
let profile_city = document.querySelector(".city p"); //location name

let profile_male = document.getElementsByClassName("male")[0]; //male
let profile_female = document.getElementsByClassName("female")[0]; //female





let heading2 = document.getElementsByTagName("h2")[0]
function requestingData() {
    let fetchData = JSON.parse(this.responseText);

    let userResult = fetchData.results[0];
    console.log(userResult);

    let fname = userResult.name.first //First Name
    profile_fName.innerHTML = `${fname}`;

    let lname = userResult.name.last //Last Name
    profile_lName.innerHTML = `${lname}`;

    //Image
    let user_Img = userResult.picture.large //Storing Img
    let srcImg = document.createElement("img")
    srcImg.src = `${user_Img}`;
    srcImg.alt = `${user_Img}`;
    profileImg.appendChild(srcImg);
    profileImg.style.animation = "unset";


    let e_adress = userResult.email //Email adress
    profile_email.innerHTML = `${e_adress}`;


    let user_dob = userResult.dob.date //DOB adress
    profile_dob.innerHTML = `${user_dob.slice(0,10)}`;
    // profile_dob;

    let user_age = userResult.dob.age //Age adress
    profile_age.innerHTML = `${user_age}`;

    let user_location = userResult.location.country //Country
    profile_location.innerHTML = `${user_location}`;

    let user_city = userResult.location.city //City
    profile_city.innerHTML = `${user_city}`;


    // Male Female
    let user_male = userResult.gender;
    if (user_male === "male") {
        profile_male.classList.add("svg-show")
    } else {
        profile_female.classList.add("svg-show")
    }

}

function debuggingError() {
    console.log("Some Error is occur: " + requestingData);
}
let url = "https://randomuser.me/api/"
let methodType = "GET";

let xhr = new XMLHttpRequest();

xhr.open(methodType, url, true);

xhr.onload = requestingData;

xhr.onerror = debuggingError;

xhr.send();