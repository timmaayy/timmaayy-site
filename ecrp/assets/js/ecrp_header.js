const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const defaultImageUrl = "https://i.imgur.com/V4cimVb.png";
const xmasImageUrl = "https://i.imgur.com/j21546d.png";
const halloweenImageUrl = "https://i.imgur.com/QtWSHNj.png";
const mainTitleInput = document.getElementById("mainTitle");
const subTitleInput = document.getElementById("subTitle");
const bannerStyleInput = document.getElementById("bannerStyle");
const mainTitlefontSizeSlider = document.getElementById('mainTitlefontSizeSlider');
const subTitleFontSizeSlider = document.getElementById('subTitleFontSizeSlider');
const mainTitlefontSizeValue = document.getElementById('mainTitlefontSizeValue');
const subTitleFontSizeValue = document.getElementById('subTitleFontSizeValue');

let mainTitleFontSize = 60; // Default font size for main title
let subTitleFontSize = 30; // Default font size for subtitle

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
    ctx.textAlign = "center";
    ctx.shadowColor = "rgba(0, 0, 0, 1)";
    ctx.shadowBlur = 1;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.globalAlpha = 1;

    const mainTitleText = mainTitleInput.value.toUpperCase();
    const subTitleText = subTitleInput.value.toUpperCase();
    const bannerStyle = bannerStyleInput.value;
    let imageUrl;

    if (bannerStyle === "XMAS") {
        imageUrl = xmasImageUrl;
    } else if (bannerStyle === "HALLOWEEN") {
        imageUrl = halloweenImageUrl;
    } else {
        imageUrl = defaultImageUrl;
    }

    const newImage = new Image();
    newImage.onload = function() {
        ctx.drawImage(newImage, 0, 0);

        ctx.font = `${mainTitleFontSize}pt 'Oswald-SemiBold', sans-serif`;
        ctx.fillText(mainTitleText, 1530, 150);

        ctx.font = `${subTitleFontSize}pt 'Oswald-SemiBold', sans-serif`;
        ctx.fillText(subTitleText, 1530, 200);
    };
    newImage.src = imageUrl;
}

function updateCanvasOnSliderRelease() {
    mainTitlefontSizeValue.textContent = mainTitlefontSizeSlider.value;
    mainTitleFontSize = parseInt(mainTitlefontSizeSlider.value);
    renderCanvas();

    subTitleFontSizeValue.textContent = subTitleFontSizeSlider.value;
    subTitleFontSize = parseInt(subTitleFontSizeSlider.value);
    renderCanvas();
}

mainTitlefontSizeSlider.addEventListener('input', function() {
    mainTitlefontSizeValue.textContent = mainTitlefontSizeSlider.value;
});

subTitleFontSizeSlider.addEventListener('input', function() {
    subTitleFontSizeValue.textContent = subTitleFontSizeSlider.value;
});

mainTitlefontSizeSlider.addEventListener('change', updateCanvasOnSliderRelease);
subTitleFontSizeSlider.addEventListener('change', updateCanvasOnSliderRelease);

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
