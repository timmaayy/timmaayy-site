const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const image = new Image();
image.src = "https://i.imgur.com/V4cimVb.png";
image.onload = function () {
    canvas.width = image.width;
    canvas.height = image.height;
    renderCanvas();
};

function renderCanvas() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set common canvas properties
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.shadowColor = "rgba(0, 0, 0, 1)";
    ctx.shadowBlur = 1;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.globalAlpha = 1;

    // Get input values
    const mainTitle = document.getElementById("mainTitle").value.toUpperCase();
    const subTitle = document.getElementById("subTitle").value.toUpperCase();
    const bannerStyle = document.getElementById("bannerStyle").value;

    // Load image based on banner style
    var imageUrl = "";
    if (bannerStyle === "GEN") {
        imageUrl = "https://i.imgur.com/V4cimVb.png";
    } else if (bannerStyle === "XMAS") {
        imageUrl = "https://i.imgur.com/3FXqvRr.png";
    }

    // Draw the loaded image
    var newImage = new Image();
    newImage.onload = function() {
        ctx.drawImage(newImage, 0, 0);

        // Set text styles and draw main and sub titles
        ctx.font = "60pt 'Oswald-SemiBold', sans-serif";
        ctx.fillText(mainTitle, 1530, 150);

        ctx.font = "30pt 'Oswald-SemiBold', sans-serif";
        ctx.fillText(subTitle, 1530, 200);
    };
    newImage.src = imageUrl;
}

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button[type="submit"]');
    if (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            renderCanvas();
        });
    }
});

window.onload = function () {
    renderCanvas();
}

function clearCanvas() {
    // Refresh the page
    location.reload();
}