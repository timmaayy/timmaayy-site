const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const defaultImageUrl = "https://i.imgur.com/0dmf1zu.png"; // Ensure this image allows cross-origin access
const mainTitleInput = document.getElementById("mainTitle");
const subTitleInput = document.getElementById("subTitle");
const mainTitlefontSizeSlider = document.getElementById('mainTitlefontSizeSlider');
const subTitleFontSizeSlider = document.getElementById('subTitleFontSizeSlider');

// Store the default values for main title and subtitle
const defaultMainTitle = mainTitleInput.value; // Default main title text
const defaultSubTitle = subTitleInput.value;   // Default subtitle text

let mainTitleFontSize = 40; // Default font size for main title
let subTitleFontSize = 20; // Default font size for subtitle

const image = new Image();
// Set the crossOrigin attribute to allow cross-origin access
image.crossOrigin = "anonymous";

image.onload = function () {
    canvas.width = image.width;
    canvas.height = image.height;
    renderCanvas();
};

image.src = defaultImageUrl;

document.getElementById('downloadBtn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.download = 'bayview-header.png';
    // Ensure the canvas is not tainted by cross-origin images
    link.href = canvas.toDataURL();
    link.click();
});

function renderCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.globalAlpha = 1;

    const mainTitleText = mainTitleInput.value.toUpperCase();
    const subTitleText = subTitleInput.value.toUpperCase();
    let imageUrl;

    imageUrl = defaultImageUrl;

    const newImage = new Image();
    // Set the crossOrigin attribute here as well
    newImage.crossOrigin = "anonymous";
    newImage.onload = function () {
        ctx.drawImage(newImage, 0, 0);

        ctx.font = `${mainTitleFontSize}pt 'Americorps', sans-serif`;
        ctx.fillText(mainTitleText, 885, 83);

        ctx.globalAlpha = 0.7;
        ctx.font = `${subTitleFontSize}pt 'Americorps', sans-serif`;
        ctx.fillText(subTitleText, 885, 116);
        ctx.globalAlpha = 1;
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

mainTitlefontSizeSlider.addEventListener('input', function () {
    mainTitlefontSizeValue.textContent = mainTitlefontSizeSlider.value;
});

subTitleFontSizeSlider.addEventListener('input', function () {
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
    // Reset input fields to their default values
    mainTitleInput.value = defaultMainTitle; // Reset to the initial main title
    subTitleInput.value = defaultSubTitle;   // Reset to the initial subtitle
    mainTitleFontSize = 40; // Reset to default font size for main title
    subTitleFontSize = 20; // Reset to default font size for subtitle
    
    // Reset sliders to their default values
    mainTitlefontSizeSlider.value = 40;
    subTitleFontSizeSlider.value = 20;

    // Update the displayed slider values
    mainTitlefontSizeValue.textContent = 40;
    subTitleFontSizeValue.textContent = 20;

    // Clear the canvas and re-render with the default image and default text
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    renderCanvas(); // Re-render the canvas with default settings
}
