let cw_gallerylist = document.querySelectorAll(".cw-gallery-img img");
let cwGalleryimg = document.querySelectorAll(".cw-gallery-img img");
let gallery_img = document.querySelectorAll(".cw-gallery-img");
let imgLightbox = document.querySelector(".lightbox");

// Lightbox Info
let lightboxImg_info = document.querySelector(".lightbox-info");
let lightboxSection = document.getElementsByClassName("lightbox-section")[0];
let cwGalleryInfo_show = document.getElementsByClassName(".cw-gallery-info-show")[0]
let lightboxClose = document.getElementById("close-cwg");



for (let i = 0; i < cw_gallerylist.length; i++) {
    let clickImgageIndex = cw_gallerylist[i];
    clickImgageIndex.addEventListener("click", () => {
        // Creating Dynamic Imag
        let createImgTag = document.createElement("img");
        let getImgSrc = clickImgageIndex.src;
        createImgTag.src = getImgSrc;
        imgLightbox.appendChild(createImgTag);

        // let cwGalleryInfoc = clickImgageIndex.nextElementSibling;
        // gallery_img
        // let cwGalleryInfo = document.getElementsByClassName("cw-gallery-info-show")[i];
        let cwGalleryInfo = clickImgageIndex.nextElementSibling;
        
        if (cwGalleryInfo) {
            let div = document.createElement("div");
            div.classList.add("w-gallery-info-container")
            div.appendChild(cwGalleryInfo)
            cwGalleryInfo.style.display = "block";
            lightboxImg_info.appendChild(div);
        }
        // Overlay open/close
        lightboxSection.style.transform = "scale(1)";
        imgLightbox.appendChild(createImgTag);
    });
}
lightboxClose.addEventListener("click", () => {
    let lightboxImg = document.querySelector(".lightbox img");
    lightboxImg.remove(lightboxImg);

    let getgalleryinfocontainer = document.querySelector('.w-gallery-info-container');
    let getgalleryinfoshow = document.querySelector('.cw-gallery-info-show');
    if (getgalleryinfocontainer) {
        getgalleryinfoshow.style.display = "none";
        getgalleryinfocontainer.remove(getgalleryinfocontainer);  
    }

    lightboxSection.style.transform = "scale(0)";
});
