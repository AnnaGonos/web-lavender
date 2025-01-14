function openModal(image) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");

    modal.style.display = "flex";
    modalImage.src = image.src.replace("small", "large");
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
