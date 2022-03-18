"use strict";
// Input Field
let inputValue = document.getElementById("user-input-number");

//Selecting P tag
let guessesValue = document.getElementsByClassName("guesses")[0];

//Guess btn
let guessBtn = document.getElementsByClassName("guess-btn")[0];

// Generating Random Score for user
let randValue = Math.trunc(Math.random() * 20 + 1);


//Add Error Message 
function errorWranning(errorMsg) {
    let error = document.getElementById("error-msg").innerHTML = `${errorMsg}`;
    inputValue.classList.add("user-inputError");
}
//remove Error Message 
function remove_errorWranning() {
    document.getElementById("error-msg").innerHTML = ``;
    inputValue.classList.remove("user-inputError");
}


// Creating Dynamic Html tags for Too High and Too Low
function numStatus(statustext, statusClass) {
    let toohight_tag = document.createElement("span");
    toohight_tag.innerHTML = `${statustext}`;
    toohight_tag.classList.add(`${statusClass}`)
    guessesValue.appendChild(toohight_tag);
}

//Decreasing User Score
let score = document.getElementsByClassName("score")[0];
function scoreDeduct() {
    score.innerHTML = parseInt(score.innerHTML) - 2;
}
//Increasing User Score
let scoreAdd = () => {
    return score.innerHTML = parseInt(score.innerHTML) + 2;
}

//Life Line Heart Image
let getImg = document.getElementsByClassName("lifeline-img");
let count_lifeLine = 1; //Count User life line
let imgCount = 0; //Count Images

//Selecting Popup
let popup = document.getElementsByClassName("pop-up-wrapper")[0];
let popup_btn = document.getElementsByClassName("pop-up-playagain")[0];
// For User input chance limitation
function checkUser_input() {
    let increase_count = count_lifeLine++;
    if (increase_count >= 5) {
        popup.classList.add("popup-show");
        win_popup_h2.innerHTML = "Ouch..";
        win_popup_p.innerHTML = "You loose";
        celerabationImg.classList.remove("celerabationImg-show");
    }
}

//Reseting random number,closing pop,removing lifelife used class
function popup_restbtn() {
    randValue = Math.trunc(Math.random() * 20 + 1);
    count_lifeLine = 1;
    // Getting Back LifeLine
    for (let i = 0; i < 5; i++) {
        getImg[`${i}`].classList.remove("lifelife-userd");
        imgCount = 0
    }
    inputValue.value = "";
    popup.classList.remove("popup-show");
}

// numvalue-msg
let numvalue_msg = document.getElementsByClassName("numvalue-msg")[0];


//You Won Data
let win_popup_h2 = document.querySelector(".pop-up h2");
let win_popup_p = document.querySelector(".pop-up p");
let celerabationImg = document.getElementsByClassName("game-celebration")[0];
let popupContine_bnt = document.getElementsByClassName("pop-up-contine")[0];

function wonData() {

    win_popup_h2.innerHTML = "You won!";
    win_popup_p.innerHTML = scoreAdd();
    popupContine_bnt.classList.add("pop-up-contine-show");
}

//Event Handling
guessBtn.addEventListener('click', () => {
    let convert_inputValue = parseInt(inputValue.value)
    if (convert_inputValue === randValue) {
        popup.classList.add("popup-show");
        remove_errorWranning();
        scoreAdd();
        wonData();
        celerabationImg.classList.add("celerabationImg-show");
    }
    else if (convert_inputValue >= 21) {
        errorWranning("Please Enter Valid Between 1 and 20");
        checkUser_input();
        scoreDeduct();
    }
    else if (convert_inputValue >= randValue) {
        numStatus(convert_inputValue, "toohigh");
        remove_errorWranning();
        checkUser_input();
        scoreDeduct();
        numvalue_msg.classList.remove("snumStatus-msg-low");
        numvalue_msg.classList.add("snumStatus-msg-high");
        numvalue_msg.innerHTML = "Too High";
    }
    else if (convert_inputValue <= randValue) {
        numStatus(convert_inputValue, "toolow");
        remove_errorWranning()
        checkUser_input();
        scoreDeduct();
        numvalue_msg.classList.remove("snumStatus-msg-high");
        numvalue_msg.classList.add("snumStatus-msg-low");
        numvalue_msg.innerHTML = "Too Low";
    }
    else if (!convert_inputValue) {
        errorWranning("Please Enter Valid Number");
        checkUser_input();
        scoreDeduct();
    }
});


// Play Again Btn
popup_btn.addEventListener("click", () => {
    score.innerHTML = 20;
    remove_errorWranning();
    popup_restbtn();
    guessesValue.innerHTML = "";
    numvalue_msg.innerHTML = "";
    numvalue_msg.classList.remove("snumStatus-msg-low");
    numvalue_msg.classList.remove("snumStatus-msg-high");
});

// Containe Btn
popupContine_bnt.addEventListener("click", () => {
    popup_restbtn();
    guessesValue.innerHTML = "";
    numvalue_msg.innerHTML = "";
    numvalue_msg.classList.remove("snumStatus-msg-low");
    numvalue_msg.classList.remove("snumStatus-msg-high");

})

//Decreasing Life line
guessBtn.onclick = function () {
    if (parseInt(inputValue.value) !== randValue) {
        try {
            //Adding Dynamic class
            getImg[`${imgCount++}`].classList.add("lifelife-userd");
            popupContine_bnt.classList.remove("pop-up-contine-show");
        }
        catch (err) {
            err.message;
        }
    }
}


