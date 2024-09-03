// Canvas and context setup
const bannerCanvas = document.getElementById("myCanvas");
const ctx = bannerCanvas.getContext("2d");
const headerCanvas = document.getElementById("myHeaderCanvas");
const headerCtx = headerCanvas.getContext("2d");

// Form elements
const mainTitleInput = document.getElementById("mainTitle");
const subTitleInput = document.getElementById("subTitle");
const mainTitleFontSizeSlider = document.getElementById("mainTitleFontSizeSlider");
const subTitleFontSizeSlider = document.getElementById("subTitleFontSizeSlider");
const headerTitleInput = document.getElementById("headerTitle");

// Default values
const defaultMainTitle = mainTitleInput.value;
const defaultSubTitle = subTitleInput.value;
const defaultHeaderTitle = headerTitleInput.value;
let mainTitleFontSize = 40;
let subTitleFontSize = 20;

// Image setup
const bannerImage = new Image();
bannerImage.crossOrigin = "anonymous";
bannerImage.src = "https://i.imgur.com/0dmf1zu.png";

const headerImage = new Image();
headerImage.crossOrigin = "anonymous";
headerImage.src = "https://i.imgur.com/YMJOsrF.png";

// Image load events
bannerImage.onload = () => {
    bannerCanvas.width = bannerImage.width;
    bannerCanvas.height = bannerImage.height;
    renderBannerCanvas();
};

headerImage.onload = () => {
    headerCanvas.width = headerImage.width;
    headerCanvas.height = headerImage.height;
    renderHeaderCanvas();
};

// Download button events
document.getElementById('bannerDownloadBtn').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'bayview-banner.png';
    link.href = bannerCanvas.toDataURL();
    link.click();
});

document.getElementById('headerDownloadBtn').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'bayview-header.png';
    link.href = headerCanvas.toDataURL();
    link.click();
});

// Render canvas functions
function renderBannerCanvas() {
    ctx.clearRect(0, 0, bannerCanvas.width, bannerCanvas.height);

    const mainTitleText = mainTitleInput.value.toUpperCase();
    const subTitleText = subTitleInput.value.toUpperCase();

    ctx.drawImage(bannerImage, 0, 0);

    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = `${mainTitleFontSize}pt 'Americorps', sans-serif`;
    ctx.fillText(mainTitleText, bannerCanvas.width / 2, 83);

    ctx.globalAlpha = 0.7;
    ctx.font = `${subTitleFontSize}pt 'Americorps', sans-serif`;
    ctx.fillText(subTitleText, bannerCanvas.width / 2, 116);
    ctx.globalAlpha = 1;
}

function renderHeaderCanvas() {
    headerCtx.clearRect(0, 0, headerCanvas.width, headerCanvas.height);

    headerCtx.drawImage(headerImage, 0, 0);

    headerCtx.fillStyle = "white";
    headerCtx.globalAlpha = 1;
    headerCtx.font = "30pt 'Americorps', sans-serif";
    headerCtx.fillText(headerTitleInput.value, 25, 32);
}

// Slider update functions
function updateCanvasOnSliderRelease() {
    mainTitleFontSize = parseInt(mainTitleFontSizeSlider.value);
    subTitleFontSize = parseInt(subTitleFontSizeSlider.value);

    renderBannerCanvas();
}

mainTitleFontSizeSlider.addEventListener('input', () => {
    document.getElementById('mainTitleFontSizeValue').textContent = mainTitleFontSizeSlider.value;
    updateCanvasOnSliderRelease(); // Update canvas in real-time
});

subTitleFontSizeSlider.addEventListener('input', () => {
    document.getElementById('subTitleFontSizeValue').textContent = subTitleFontSizeSlider.value;
    updateCanvasOnSliderRelease(); // Update canvas in real-time
});

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('button[type="submit"]');
    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            renderBannerCanvas();
            renderHeaderCanvas();
        });
    }
});

// Clear canvas functions
function clearBannerCanvas() {
    // Reset input fields to their default values
    mainTitleInput.value = defaultMainTitle;
    subTitleInput.value = defaultSubTitle;

    // Reset font sizes to their default values
    mainTitleFontSize = 40;
    subTitleFontSize = 20;

    // Reset sliders to their default values
    mainTitleFontSizeSlider.value = mainTitleFontSize;
    subTitleFontSizeSlider.value = subTitleFontSize;

    // Update the displayed slider values
    document.getElementById('mainTitleFontSizeValue').textContent = mainTitleFontSize;
    document.getElementById('subTitleFontSizeValue').textContent = subTitleFontSize;

    // Re-render canvas with default settings
    renderBannerCanvas();
}

function clearHeaderCanvas() {
    // Reset header title input to its default value
    headerTitleInput.value = defaultHeaderTitle;

    // Re-render header canvas with default settings
    renderHeaderCanvas();
}

// Initialize canvas on window load
window.onload = () => {
    renderBannerCanvas();
    renderHeaderCanvas(); // Ensure header canvas is rendered if needed
};
