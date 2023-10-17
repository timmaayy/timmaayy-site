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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.globalAlpha = 1;

    ctx.drawImage(image, 0, 0);

    const mainTitle = document.getElementById("mainTitle").value.toUpperCase();

    // Set font style
    ctx.font = "60pt 'Oswald-SemiBold', sans-serif";

    // Set drop shadow properties
    ctx.shadowColor = "rgba(0, 0, 0, 1)"; // Shadow color (black with 0% opacity)
    ctx.shadowBlur = 1; // Shadow blur amount
    ctx.shadowOffsetX = 3; // Horizontal shadow offset
    ctx.shadowOffsetY = 3; // Vertical shadow offset
    
    // Draw text with drop shadow effect
    ctx.fillText(mainTitle, 1530, 150);

    const subTitle = document.getElementById("subTitle").value.toUpperCase();;

    // Set font style
    ctx.font = "30pt 'Oswald-SemiBold', sans-serif";

    // Set drop shadow properties
    ctx.shadowColor = "rgba(0, 0, 0, 1)"; // Shadow color (black with 0% opacity)
    ctx.shadowBlur = 1; // Shadow blur amount
    ctx.shadowOffsetX = 3; // Horizontal shadow offset
    ctx.shadowOffsetY = 3; // Vertical shadow offset

    ctx.fillText(subTitle, 1530, 200);

}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button[type="submit"]');
    if(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            renderCanvas();
            renderHeaderCanvas();
        });
    }
});

window.onload = function () {
    renderCanvas();
    renderHeaderCanvas();
}

function clearCanvas() {
    // Refresh the page
    location.reload();
}