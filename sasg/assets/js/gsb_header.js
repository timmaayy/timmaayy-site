const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const image = new Image();
image.src = "https://i.imgur.com/E8vE80Y.png";
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

/* UTC Time */
function showTime() {
    var date = new Date();
    date.setUTCHours(date.getUTCHours());
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateString = date.toLocaleDateString('en-US', options);
    var utcString = dateString + ', ' + timeString + ' UTC';
    document.getElementById("time").innerHTML = utcString;
}
setInterval(showTime, 1000);

const headerCanvas = document.getElementById("myHeaderCanvas");
const headerCtx = headerCanvas.getContext("2d");
const headerImage = new Image();
headerImage.src = "https://i.imgur.com/bdimmq2.png";
headerImage.onload = function () {
    headerCanvas.width = headerImage.width;
    headerCanvas.height = headerImage.height;
    renderHeaderCanvas();
};

function renderHeaderCanvas() {
    headerCtx.clearRect(0, 0, canvas.width, canvas.height);
    headerCtx.fillStyle = "white";
    headerCtx.globalAlpha = 1;

    headerCtx.drawImage(headerImage, 0, 0);

    const title = document.getElementById("title").value;
    headerCtx.font = "25pt 'MSU1', sans-serif";
    headerCtx.fillText(title, 25, 36);
}

function clearHeaderCanvas() {
    // Refresh the page
    location.reload();
}