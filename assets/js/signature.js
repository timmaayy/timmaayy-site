$("input[name='endDateRadio']").change(function () {
    if ($(this).val() == "no") {
        $("#endDateField").show();
    } else {
        $("#endDateField").hide();
        document.getElementById("endDate").value = "";
    }
});

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const image = new Image();
image.src = "https://i.imgur.com/01qTDEC.png";
image.onload = function () {
    canvas.width = image.width;
    canvas.height = image.height;
    renderCanvas();
};

function renderCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(image, 0, 0);

    const mainTitle = document.getElementById("fullName").value;
    ctx.fillStyle = "white";
    ctx.font = "35pt 'MSU1', sans-serif";
    ctx.fillText(mainTitle, 325, 94);

    const subTitle = document.getElementById("rank").value;
    ctx.fillStyle = "#0a2062";
    ctx.font = "22.5pt 'MSU1', sans-serif";
    ctx.fillText(subTitle, 325, 132);

    const startDate = moment(document.getElementById("startDate").value).format('DD/MMM/YYYY');
    const endDate = document.getElementById("endDate").value !== "" ? moment(document.getElementById("endDate").value).format('DD/MMM/YYYY') : "present";
    ctx.fillStyle = "#0a2062";
    ctx.font = "10pt 'MSU1', sans-serif";
    ctx.fillText(startDate + " - " + endDate, 1104, 135);

    const badgeNumber = document.getElementById("badgeNumber").value;
    ctx.fillStyle = "white";
    ctx.font = "20pt 'MSU1', sans-serif";
    ctx.fillText("#" + badgeNumber, 1326, 85);
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