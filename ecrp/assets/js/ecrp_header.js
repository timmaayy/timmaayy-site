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
    const subTitle = document.getElementById("subTitle").value.toUpperCase();;
    const bannerStyle = document.getElementById("bannerStyle").value;

    // Set common font style and drop shadow properties
    ctx.textAlign = "center";
    ctx.shadowColor = "rgba(0, 0, 0, 1)";
    ctx.shadowBlur = 1;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;

    if (bannerStyle === "GEN") {

        image.src = "https://i.imgur.com/V4cimVb.png";

        // Customize for "General" style
        ctx.fillStyle = "white";
        ctx.font = "60pt 'Oswald-SemiBold', sans-serif";
        ctx.fillText(mainTitle, 1530, 150);

        ctx.font = "30pt 'Oswald-SemiBold', sans-serif";
        ctx.fillText(subTitle, 1530, 200);

    } else if (bannerStyle === "XMAS") {

        image.src = "https://i.imgur.com/3FXqvRr.png";

        // Customize for "Christmas" style
        ctx.fillStyle = "white";
        ctx.font = "60pt 'Oswald-SemiBold', sans-serif";
        ctx.fillText(mainTitle, 1530, 150);

        ctx.font = "30pt 'Oswald-SemiBold', sans-serif";
        ctx.fillText(subTitle, 1530, 200);
    }

}

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button[type="submit"]');
    if (button) {
        button.addEventListener('click', function (event) {
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