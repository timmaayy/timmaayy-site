const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const defaultImageUrl = "https://i.imgur.com/VzuXnj6.png";
const nameInput = document.getElementById("name");
const rankInput = document.getElementById("rank");
const divisions1Input = document.getElementById("divisions1");
const divisions2Input = document.getElementById("divisions2");
const divisions3Input = document.getElementById("divisions3");

let nameFontSize = 24; // Default font size for main title
let rankFontSize = 18; // Default font size for rank

const image = new Image();
image.onload = function () {
    canvas.width = image.width;
    canvas.height = image.height;
    renderCanvas();
};

image.src = defaultImageUrl;

function renderCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.textAlign = "left"; // Align the text to the left
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.shadowBlur = 0.5;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.globalAlpha = 1;

    const nameText = nameInput.value.toUpperCase();
    const rankText = rankInput.value.toUpperCase();
    const fullText = `${nameText} | ${rankText}`;
    const divisions1Text = divisions1Input.value.toUpperCase();
    const divisions2Text = divisions2Input.value.toUpperCase();
    const divisions3Text = divisions3Input.value.toUpperCase();

    ctx.drawImage(image, 0, 0);

    // Render the name and rank on one line separated by a |
    ctx.font = `20pt 'MSU1', sans-serif`;
    ctx.fillText(fullText, 340, 171);

    ctx.fillStyle = "#eeca57";
    ctx.font = `12pt MSU1, sans-serif`;
    ctx.fillText(divisions1Text, 340, 210);
    
    ctx.fillStyle = "#eeca57";
    ctx.font = `12pt MSU1, sans-serif`;
    ctx.fillText(divisions2Text, 340, 230);
    
    ctx.fillStyle = "#eeca57";
    ctx.font = `12pt MSU1, sans-serif`;
    ctx.fillText(divisions3Text, 340, 250);
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
    location.reload();
}