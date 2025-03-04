let images = [
    "https://via.placeholder.com/300/FF5733",
    "https://via.placeholder.com/300/33FF57",
    "https://via.placeholder.com/300/3357FF"
];

let index = 0;

function showImage() {
    document.getElementById("slider").src = images[index];
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

// Initialize the slider
showImage();
