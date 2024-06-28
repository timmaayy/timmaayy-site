const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const defaultImageUrl = "https://i.imgur.com/VzuXnj6.png";
const nameInput = document.getElementById("name");
const rankInput = document.getElementById("rank");
const divisions1Input = document.getElementById("line1");
const divisions2Input = document.getElementById("line2");
const divisions3Input = document.getElementById("line3");
const divisions4Input = document.getElementById("line4");

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
    ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
    ctx.shadowBlur = 0.5;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.globalAlpha = 1;

    const nameText = nameInput.value.toUpperCase();
    const rankText = rankInput.value.toUpperCase();
    const divisions1Text = divisions1Input.value.toUpperCase();
    const divisions2Text = divisions2Input.value.toUpperCase();
    const divisions3Text = divisions3Input.value.toUpperCase();
    const divisions4Text = divisions4Input.value.toUpperCase();
    const fullText = `${nameText} | ${rankText}`;
    const line1Text = `${divisions1Text}    ${divisions2Text}`;
    const line2Text = `${divisions3Text}    ${divisions4Text}`;

    ctx.drawImage(image, 0, 0);

    // Render the name and rank on one line separated by a |
    ctx.font = `20pt 'MSU1', sans-serif`;
    ctx.fillStyle = "#white";
    ctx.fillText(fullText, 340, 171);

    ctx.fillStyle = "#eeca57";
    ctx.font = `12pt 'MSU1', sans-serif`;
    ctx.fillText(line1Text, 340, 210);

    ctx.fillText(line2Text, 340, 230);
}

document.addEventListener('DOMContentLoaded', function () {
    // Update canvas when inputs change
    nameInput.addEventListener('input', renderCanvas);
    rankInput.addEventListener('input', renderCanvas);
    divisions1Input.addEventListener('input', renderCanvas);
    divisions2Input.addEventListener('input', renderCanvas);
    divisions3Input.addEventListener('input', renderCanvas);
    divisions4Input.addEventListener('input', renderCanvas);

    // Optional: Update canvas on form submit (if needed)
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
    // Reset input values
    nameInput.value = 'Tyrone Cox';
    rankInput.value = 'Owner';
    divisions1Input.value = 'Human Resources - HR Assistant';
    divisions2Input.value = 'Training - Trainer';
    divisions3Input.value = 'Public Relations - Event Coordinator';
    divisions4Input.value = 'Aviation - Aircraft Mechanic';

    // Render canvas with cleared values
    renderCanvas();
}

