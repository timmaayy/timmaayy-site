const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const image = new Image();
image.src = "https://i.imgur.com/XciuRPV.png";
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

    const mainTitle = document.getElementById("mainTitle").value;
    ctx.font = "40pt 'MSU1', sans-serif";
    ctx.fillText(mainTitle, 885, 97);

    ctx.globalAlpha = 0.5;
    const subTitle = document.getElementById("subTitle").value;
    ctx.font = "22.5pt 'MSU1', sans-serif";
    ctx.fillText(subTitle, 885, 135);
    ctx.globalAlpha = 1;
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button[type="submit"]');
    if(button) {
        button.addEventListener('click', function(event) {
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