// Smooth scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carousel functionality for features
let currentFeatureIndex = 0;
const features = document.querySelectorAll('.feature');
const totalFeatures = features.length;

function showFeature(index) {
    features.forEach((feature, i) => {
        feature.style.display = i === index ? 'block' : 'none';
    });
}

document.getElementById('prevFeature').addEventListener('click', () => {
    currentFeatureIndex = (currentFeatureIndex - 1 + totalFeatures) % totalFeatures;
    showFeature(currentFeatureIndex);
});

document.getElementById('nextFeature').addEventListener('click', () => {
    currentFeatureIndex = (currentFeatureIndex + 1) % totalFeatures;
    showFeature(currentFeatureIndex);
});

showFeature(currentFeatureIndex);  // Initial display

// Modal window for contact form
const modal = document.getElementById('contactModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementsByClassName('close')[0];

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});