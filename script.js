const monitorizareResurseSection = document.querySelector('#monitorizare-resurse');
const images = monitorizareResurseSection.querySelectorAll('img');
let currentIndex = 0;
let slideshowInterval;

function startSlideshow() {
    images.forEach((img, index) => {
        img.style.display = index === currentIndex ? 'block' : 'none';
    });
    currentIndex = (currentIndex + 1) % images.length;
}

monitorizareResurseSection.addEventListener('dblclick', () => {
    images.forEach(img => img.style.display = 'none');
    slideshowInterval = setInterval(startSlideshow, 3000);
    startSlideshow();
});
