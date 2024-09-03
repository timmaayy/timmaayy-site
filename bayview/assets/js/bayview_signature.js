const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const defaultImageUrl = "https://i.imgur.com/3bVjqQK.png";
const inputs = ["name", "rank", "line1", "line2", "line3", "line4"].map(id => document.getElementById(id));

const image = new Image();
image.onload = renderCanvas;
image.src = defaultImageUrl;

function renderCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.textAlign = "left";

    const [nameInput, rankInput, divisions1Input, divisions2Input, divisions3Input, divisions4Input] = inputs;
    const nameText = nameInput.value.toUpperCase();
    const rankText = rankInput.value.toUpperCase();
    const divisions1Text = divisions1Input.value.toUpperCase();
    const divisions2Text = divisions2Input.value.toUpperCase();
    const divisions3Text = divisions3Input.value.toUpperCase();
    const divisions4Text = divisions4Input.value.toUpperCase();

    ctx.drawImage(image, 0, 0);

    // Name and rank text
    ctx.font = `34pt 'AmeriCorps', sans-serif`;
    // First text with fill and stroke
    ctx.fillStyle = "white";
    ctx.fillText(`${nameText}`, 375, 65);

    ctx.font = `24pt 'AmeriCorps', sans-serif`;
    // Second text with fill and stroke
    ctx.fillStyle = "white";
    ctx.fillText(`${rankText}`, 375, 95);

    // Division lines text
    ctx.globalAlpha = 0.7;
    ctx.font = `14pt 'MSU1', sans-serif`;
    // Text Fill
    ctx.fillStyle = "white";
    ctx.fillText(`${divisions1Text}    ${divisions2Text}`, 375, 133);
    ctx.fillText(`${divisions3Text}    ${divisions4Text}`, 375, 157);
    ctx.globalAlpha = 1;
}

inputs.forEach(input => input.addEventListener('input', renderCanvas));

function clearCanvas() {
    inputs[0].value = 'Tyrone Cox';
    inputs[1].value = 'Owner';
    inputs[2].value = 'Human Resources - HR Assistant';
    inputs[3].value = 'Training - Trainer';
    inputs[4].value = 'Public Relations - Event Coordinator';
    inputs[5].value = 'Aviation - Aircraft Mechanic';
    renderCanvas();
}

window.onload = renderCanvas;
