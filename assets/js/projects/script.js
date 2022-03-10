// Category
let trainingCategory = document.getElementsByClassName("training-category")[0]; //Training Category
//PSD Category
let psdCategory = document.getElementsByClassName("psd-category")[0];
//Self Category
let selfCategory = document.getElementsByClassName("self-category")[0];


//Projects
let trainingProjects = document.getElementsByClassName("training-projects")[0];
let psdProjects = document.getElementsByClassName("psd-projects")[0];
let selfProjects = document.getElementsByClassName("self-projects")[0];


// PSD
psdCategory.addEventListener("click", () => {
    // Categorys
    selfCategory.classList.remove('active-proj-category');
    trainingCategory.classList.remove('active-proj-category');
    psdCategory.classList.add('active-proj-category');

    // Projects
    psdProjects.classList.remove("hide-projects");
    trainingProjects.classList.add("hide-projects");
    selfProjects.classList.add("hide-projects");
});

selfCategory.addEventListener("click", () => {
    // Categorys
    trainingCategory.classList.remove('active-proj-category');
    psdCategory.classList.remove('active-proj-category');
    selfCategory.classList.add('active-proj-category');

    // Projects
    selfProjects.classList.remove("hide-projects");
    trainingProjects.classList.add("hide-projects");
    psdProjects.classList.add("hide-projects");
});

trainingCategory.addEventListener("click", () => {
    // Categorys
    selfCategory.classList.remove('active-proj-category');
    psdCategory.classList.remove('active-proj-category');
    trainingCategory.classList.add('active-proj-category');

    // Projects
    trainingProjects.classList.remove("hide-projects");
    psdProjects.classList.add("hide-projects");
    selfProjects.classList.add("hide-projects");

});