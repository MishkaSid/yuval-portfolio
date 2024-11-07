`use strict`

// Select popup elements
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const closeBtn = document.getElementById('close-btn');

// Open popup when an image is clicked
document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('click', () => {
        popupImage.src = img.src; // Set popup image source
        popup.style.display = 'flex'; // Show popup
    });
});

// Close popup when close button is clicked
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'; // Hide popup
});

// Optional: Close popup when clicking outside the image
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
