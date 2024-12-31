/*****************************************
 * 1) MENU IMAGES (two side by side)
 *****************************************/
const menuImages = document.querySelectorAll('.menu-container img');
let currentMenuIndex = 0;
let activeGroup = null; // For fullscreen usage

function previousMenuImage() {
    alert('Previous menu image clicked!');
    // If you want an actual slideshow, add logic here
}

function nextMenuImage() {
    alert('Next menu image clicked!');
    // If you want an actual slideshow, add logic here
}

// Fullscreen for the menu images
let currentMenuFullscreenIndex = 0;
function openMenuFullscreen(index) {
    activeGroup = 'menu';
    currentMenuFullscreenIndex = index;
    const overlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.getElementById('fullscreen-image');
    fullscreenImage.src = menuImages[index].src;
    overlay.style.display = 'flex';
}

/*****************************************
 * 3) FULLSCREEN (Shared Overlay)
 *****************************************/
function closeFullscreen() {
    document.getElementById('fullscreen-overlay').style.display = 'none';
}

function prevFullscreenImage() {
    if (activeGroup === 'menu') {
    currentMenuFullscreenIndex--;
    if (currentMenuFullscreenIndex < 0) {
        currentMenuFullscreenIndex = menuImages.length - 1;
    }
    document.getElementById('fullscreen-image').src = menuImages[currentMenuFullscreenIndex].src;
    } else if (activeGroup === 'gallery') {
    currentGalleryFullscreenIndex--;
    if (currentGalleryFullscreenIndex < 0) {
        currentGalleryFullscreenIndex = galleryImages.length - 1;
    }
    document.getElementById('fullscreen-image').src = galleryImages[currentGalleryFullscreenIndex].src;
    }
}

function nextFullscreenImage() {
    if (activeGroup === 'menu') {
    currentMenuFullscreenIndex++;
    if (currentMenuFullscreenIndex >= menuImages.length) {
        currentMenuFullscreenIndex = 0;
    }
    document.getElementById('fullscreen-image').src = menuImages[currentMenuFullscreenIndex].src;
    } else if (activeGroup === 'gallery') {
    currentGalleryFullscreenIndex++;
    if (currentGalleryFullscreenIndex >= galleryImages.length) {
        currentGalleryFullscreenIndex = 0;
    }
    document.getElementById('fullscreen-image').src = galleryImages[currentGalleryFullscreenIndex].src;
    }
}

/*****************************************
 * 4) COMPANIES SECTION
 *****************************************/
const container = document.getElementById('companiesContainer');
const companyCards = document.querySelectorAll('.company-card');
const prevCompanyBtn = document.getElementById('prevCompanyBtn');
const nextCompanyBtn = document.getElementById('nextCompanyBtn');
const currentSlideSpan = document.getElementById('currentSlide');
const totalSlidesSpan = document.getElementById('totalSlides');

const cardWidth = 320 + 20; // 320px wide + 20px margin-right
const visibleCards = 3;     // how many are visible at once
const totalCards = companyCards.length;

// For display, set total slides to # of cards:
totalSlidesSpan.textContent = totalCards;

let currentCompanyIndex = 0; // leftmost card index in view

function updateCompaniesSlide() {
    if (currentCompanyIndex < 0) currentCompanyIndex = 0;
    if (currentCompanyIndex > totalCards - visibleCards) {
    currentCompanyIndex = totalCards - visibleCards;
    }
    container.style.transform = `translateX(-${currentCompanyIndex * cardWidth}px)`;
    currentSlideSpan.textContent = currentCompanyIndex + 1;
}

prevCompanyBtn.addEventListener('click', () => {
    currentCompanyIndex--;
    updateCompaniesSlide();
});

nextCompanyBtn.addEventListener('click', () => {
    currentCompanyIndex++;
    updateCompaniesSlide();
});

// Initialize companies slider
updateCompaniesSlide();

const galleryImages = [
    "https://via.placeholder.com/1920x1080/FF5733/ffffff?text=Ramen+Dish+1",
    "https://via.placeholder.com/1920x1080/33FF57/ffffff?text=Ramen+Dish+2",
    "https://via.placeholder.com/1920x1080/3357FF/ffffff?text=Ramen+Dish+3",
    "https://via.placeholder.com/1920x1080/FF33A8/ffffff?text=Ramen+Dish+4",
    "https://via.placeholder.com/1920x1080/FFFF33/000000?text=Ramen+Dish+5",
];

let currentIndex = 0;

function updateGalleryImage() {
    const fullscreenImage = document.getElementById("fullscreen-gallery-image");
    fullscreenImage.style.opacity = 0; // Fade out
    setTimeout(() => {
    fullscreenImage.src = galleryImages[currentIndex];
    fullscreenImage.style.opacity = 1; // Fade in
    }, 300);
}

function nextGalleryImage() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateGalleryImage();
}

function prevGalleryImage() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGalleryImage();
}

function closeGallery() {
    const gallerySection = document.getElementById("gallery");
    gallerySection.style.display = "none";
}

// Initialize the gallery with the first image
document.addEventListener("DOMContentLoaded", () => {
    updateGalleryImage();
});