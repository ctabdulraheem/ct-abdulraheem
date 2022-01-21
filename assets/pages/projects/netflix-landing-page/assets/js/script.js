//feature tab selection
let All_featureTab = document.querySelectorAll(".feature-tab");
let sel_featureTab1 = All_featureTab[0];
let sel_featureTab2 = All_featureTab[1];
let sel_featureTab3 = All_featureTab[2];

//Tabs Selection
let cancelMembership = document.getElementsByClassName("cancelmembership")[0];
let showsTab = document.getElementsByClassName("shows-tab")[0];
let membershipPlan = document.getElementsByClassName("membership-plan")[0];

//Icons Selection (Bottom Border)
let doorIcon_btmBoder = document.getElementsByClassName("feature-tab1")[0];
let tabletIcon_btmBoder = document.getElementsByClassName("feature-tab2")[0];
let tagsIcon_btmBoder = document.getElementsByClassName("feature-tab3")[0];

sel_featureTab1.addEventListener("click", () => {
    cancelMembership.classList.remove("feature-tabHide");

    //Hiding Feature tab 1 and 2
    showsTab.classList.add("feature-tabHide");
    membershipPlan.classList.add("feature-tabHide");

    //Adding Bottom Border
    doorIcon_btmBoder.classList.add("feature-bottom-border");

    //Removing Bottom Border
    tabletIcon_btmBoder.classList.remove("feature-bottom-border")
    tagsIcon_btmBoder.classList.remove("feature-bottom-border")
});

sel_featureTab2.addEventListener("click", () => {

    showsTab.classList.remove("feature-tabHide");
    
    //Hiding Feature tab 1 and 3
    cancelMembership.classList.add("feature-tabHide");
    membershipPlan.classList.add("feature-tabHide");

    //Removing Bottom Border
    doorIcon_btmBoder.classList.remove("feature-bottom-border");
    tagsIcon_btmBoder.classList.remove("feature-bottom-border");

    //Adding Bottom Border
    tabletIcon_btmBoder.classList.add("feature-bottom-border");
    
})

sel_featureTab3.addEventListener("click", () => {
    membershipPlan.classList.remove("feature-tabHide");

    //Hiding 2 and 1
    showsTab.classList.add("feature-tabHide");
    cancelMembership.classList.add("feature-tabHide");

    //Adding Bottom Border
    tagsIcon_btmBoder.classList.add("feature-bottom-border");

    //Removing Bottom Border
    doorIcon_btmBoder.classList.remove("feature-bottom-border");
    tabletIcon_btmBoder.classList.remove("feature-bottom-border");
})