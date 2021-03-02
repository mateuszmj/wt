"use strict";

// Mobile menu

const menuMobile = document.querySelector('#navMobile');
const menuMobileBtn = document.querySelector('#navMobileBtn');
const menuMobileClose = document.querySelector('#navMobileBtnClose');

function itemToggle(item) {
    item.classList.toggle('active');
}

menuMobileBtn.addEventListener('click', () => {
    itemToggle(menuMobile);
    itemToggle(menuMobileClose);
});
menuMobileClose.addEventListener('click', () => {
    itemToggle(menuMobile);
    itemToggle(menuMobileClose);
});


// GALLERY

// Galleries images and descriptions

const galleryImgs = [];

galleryImgs[0] = [{
    id: 0,
    src: "./assets/gallery/gallery_img_1.jpg",
    thumb: "./assets/gallery/gallery_thumb_1.jpg",
    alt: "Rice fields"
}, {
    id: 1,
    src: "./assets/gallery/gallery_img_2.jpg",
    thumb: "./assets/gallery/gallery_thumb_2.jpg",
    alt: "Japan"
}, {
    id: 2,
    src: "./assets/gallery/gallery_img_3.jpg",
    thumb: "./assets/gallery/gallery_thumb_3.jpg",
    alt: "Ocean"
}, {
    id: 3,
    src: "./assets/gallery/gallery_img_4.jpg",
    thumb: "./assets/gallery/gallery_thumb_4.jpg",
    alt: "Mountains"
}, {
    id: 4,
    src: "./assets/gallery/gallery_img_5.jpg",
    thumb: "./assets/gallery/gallery_thumb_5.jpg",
    alt: "City"
}, {
    id: 5,
    src: "./assets/gallery/gallery_img_6.jpg",
    thumb: "./assets/gallery/gallery_thumb_6.jpg",
    alt: "Iceberg"
}, {
    id: 6,
    src: "./assets/gallery/gallery_img_7.jpg",
    thumb: "./assets/gallery/gallery_thumb_7.jpg",
    alt: "National park"
}, {
    id: 7,
    src: "./assets/gallery/gallery_img_8.jpg",
    thumb: "./assets/gallery/gallery_thumb_8.jpg",
    alt: "City at night"
}, {
    id: 8,
    src: "./assets/gallery/gallery_img_9.jpg",
    thumb: "./assets/gallery/gallery_thumb_9.jpg",
    alt: "Walley"
}, {
    id: 9,
    src: "./assets/gallery/gallery_img_10.jpg",
    thumb: "./assets/gallery/gallery_thumb_10.jpg",
    alt: "Northen lights"
}, {
    id: 10,
    src: "./assets/gallery/gallery_img_11.jpg",
    thumb: "./assets/gallery/gallery_thumb_11.jpg",
    alt: "Winter"
}, {
    id: 11,
    src: "./assets/gallery/gallery_img_12.jpg",
    thumb: "./assets/gallery/gallery_thumb_12.jpg",
    alt: "Clearing"
}];

galleryImgs[1] = [{
    id: 0,
    src: "./assets/gallery/gallery_img_13.jpg",
    thumb: "./assets/gallery/gallery_thumb_13.jpg",
    alt: "Ocean"
}, {
    id: 1,
    src: "./assets/gallery/gallery_img_14.jpg",
    thumb: "./assets/gallery/gallery_thumb_14.jpg",
    alt: "Night sky"
}, {
    id: 2,
    src: "./assets/gallery/gallery_img_15.jpg",
    thumb: "./assets/gallery/gallery_thumb_15.jpg",
    alt: "Landscape"
}, {
    id: 3,
    src: "./assets/gallery/gallery_img_16.jpg",
    thumb: "./assets/gallery/gallery_thumb_16.jpg",
    alt: "City"
}, {
    id: 4,
    src: "./assets/gallery/gallery_img_17.jpg",
    thumb: "./assets/gallery/gallery_thumb_17.jpg",
    alt: "Fog"
}, {
    id: 5,
    src: "./assets/gallery/gallery_img_18.jpg",
    thumb: "./assets/gallery/gallery_thumb_18.jpg",
    alt: "Lake"
}, {
    id: 6,
    src: "./assets/gallery/gallery_img_19.jpg",
    thumb: "./assets/gallery/gallery_thumb_19.jpg",
    alt: "Rice fields"
}, {
    id: 7,
    src: "./assets/gallery/gallery_img_20.jpg",
    thumb: "./assets/gallery/gallery_thumb_20.jpg",
    alt: "Milky Way"
}, {
    id: 8,
    src: "./assets/gallery/gallery_img_21.jpg",
    thumb: "./assets/gallery/gallery_thumb_21.jpg",
    alt: "River"
}, {
    id: 9,
    src: "./assets/gallery/gallery_img_22.jpg",
    thumb: "./assets/gallery/gallery_thumb_22.jpg",
    alt: "Asia"
}, {
    id: 10,
    src: "./assets/gallery/gallery_img_23.jpg",
    thumb: "./assets/gallery/gallery_thumb_23.jpg",
    alt: "Storm"
}, {
    id: 11,
    src: "./assets/gallery/gallery_img_24.jpg",
    thumb: "./assets/gallery/gallery_thumb_24.jpg",
    alt: "Icebergs"
}, {
    id: 12,
    src: "./assets/gallery/gallery_img_25.jpg",
    thumb: "./assets/gallery/gallery_thumb_25.jpg",
    alt: "Aurora"
}, {
    id: 13,
    src: "./assets/gallery/gallery_img_26.jpg",
    thumb: "./assets/gallery/gallery_thumb_26.jpg",
    alt: "Iceland"
}];


// Variables

const galleriesImgs = document.querySelectorAll('.gallery__image__img');
const galleriesPrev = document.querySelectorAll('.gallery__image__btns__item--prev');
const galleriesNext = document.querySelectorAll('.gallery__image__btns__item--next');
const galleriesThumbs = document.querySelectorAll('.gallery__thumbs');

let numberOfThumbs;
const galleryCurrentImg = [];
const thumbsPositions = [];


// Event listeners

window.addEventListener("resize", () => {
    if(numberOfThumbs != checkNumberOfThumbs()) startGallery();
});
galleriesPrev.forEach((el, i) => {
    el.addEventListener('click', () => { changePhoto(i, 'prev'); } );
});
galleriesNext.forEach((el, i) => {
    el.addEventListener('click', () => { changePhoto(i, 'next'); } );
});


// Functions

function checkNumberOfThumbs(selectedGallery = 0) {
    if(galleriesImgs[selectedGallery].width > 760) { return 7; }
    else if(galleriesImgs[selectedGallery].width > 660) { return 6; }
    else if(galleriesImgs[selectedGallery].width > 540) { return 5; }
    else { return 4; }
}

function setThumbsPositions(selectedGallery) {
    thumbsPositions[selectedGallery] = [0, numberOfThumbs - 1];
}

function renderPhoto(selectedGallery) {
    const findImg = galleryImgs[selectedGallery].find((i) => {
        return i.id === galleryCurrentImg[selectedGallery];
    });
    galleriesImgs[selectedGallery].src = findImg.src;
    galleriesImgs[selectedGallery].alt = findImg.alt;
}

function renderThumbs(selectedGallery) {
    galleriesThumbs[selectedGallery].innerHTML = "";
    for (const i in galleryImgs[selectedGallery]) {
        let newThumb = document.createElement("a");
        newThumb.className = "gallery__thumbs__item";
        newThumb.style.backgroundImage = `url("${galleryImgs[selectedGallery][i].thumb}")`;
        newThumb.style.display = "none";
        galleriesThumbs[selectedGallery].appendChild(newThumb);
        let newThumbColor = document.createElement("span");
        newThumbColor.className = "gallery__thumbs__item__color";
        newThumb.appendChild(newThumbColor);
    }
    const allThumbs = galleriesThumbs[selectedGallery].querySelectorAll('.gallery__thumbs__item');
    allThumbs.forEach((thumb, i) => {
        thumb.addEventListener('click', () => {
            galleryCurrentImg[selectedGallery] = i;
            changePhoto(selectedGallery);
        });
    });
    changeThumbs(selectedGallery);
}

function changeArrows(selectedGallery) {
    if(galleryCurrentImg[selectedGallery] > 0) {
        galleriesPrev[selectedGallery].style.visibility = "visible";
    } else {
        galleriesPrev[selectedGallery].style.visibility = "hidden";
    }
    if(galleryCurrentImg[selectedGallery] < galleryImgs[selectedGallery].length-1) {
        galleriesNext[selectedGallery].style.visibility = "visible";
    } else {
        galleriesNext[selectedGallery].style.visibility = "hidden";
    }
}

function changeThumbs(selectedGallery) {
    const allThumbs = galleriesThumbs[selectedGallery].querySelectorAll('.gallery__thumbs__item');
    allThumbs.forEach((el, i) => {
        el.classList.remove('gallery__thumbs__item--curr');
        if(i === galleryCurrentImg[selectedGallery]) {
            el.classList.add('gallery__thumbs__item--curr');
        }
    });
    if(galleryCurrentImg[selectedGallery] === thumbsPositions[selectedGallery][1] && galleryCurrentImg[selectedGallery] != allThumbs.length - 1) {
        thumbsPositions[selectedGallery][0]++;
        thumbsPositions[selectedGallery][1]++;
    }
    if(galleryCurrentImg[selectedGallery] === thumbsPositions[selectedGallery][0] && galleryCurrentImg[selectedGallery] != 0) {
        thumbsPositions[selectedGallery][0]--;
        thumbsPositions[selectedGallery][1]--;
    }
    allThumbs.forEach((el, i) => {
        if(i >= thumbsPositions[selectedGallery][0] && i <= thumbsPositions[selectedGallery][1]) {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    });
}

function changePhoto(selectedGallery, action) {
    if(action === 'prev' && galleryCurrentImg[selectedGallery] > 0) galleryCurrentImg[selectedGallery]--;
    else if(action === 'next' && galleryCurrentImg[selectedGallery] < galleryImgs[selectedGallery].length-1) galleryCurrentImg[selectedGallery]++;
    renderPhoto(selectedGallery);
    changeArrows(selectedGallery);
    changeThumbs(selectedGallery);
}

function startGallery() {
    numberOfThumbs = checkNumberOfThumbs();
    galleryImgs.forEach((el, i) => {
        galleryCurrentImg[i] = 0;
        setThumbsPositions(i);
        renderPhoto(i);
        changeArrows(i);
        renderThumbs(i);
    });
}


// Start

startGallery();