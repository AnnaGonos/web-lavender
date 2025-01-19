const mainImage = document.getElementById('main-image');
const galleryImages = document.querySelectorAll('.product-item__gallery-image');

function updateMainImage() {
    const selectedShade = document.querySelector('input[name="shade"]:checked').value;

    galleryImages.forEach(image => {
        if (image.dataset.shade === selectedShade) {
            mainImage.src = image.src;
            mainImage.alt = image.alt;
        }
    });
}

function openLightbox(wrapper) {
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');

    const image = wrapper.querySelector('.product-item__gallery-image');
    const shade = image.dataset.shade;

    lightboxImage.src = image.src;
    lightboxCaption.textContent = `Композиция №2. ${shade.charAt(0).toUpperCase() + shade.slice(1)}.`;

    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

document.querySelectorAll('input[name="shade"]').forEach(input => {
    input.addEventListener('change', updateMainImage);
});

updateMainImage();
