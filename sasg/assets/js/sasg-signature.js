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
image.src = "https://i.imgur.com/lKND0eR.png";
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
    ctx.fillStyle = "white";
    ctx.font = "22.5pt 'MSU1', sans-serif";
    ctx.fillText(subTitle, 325, 132);

    const startDate = moment(document.getElementById("startDate").value).format('DD/MMM/YYYY');
    const endDate = document.getElementById("endDate").value !== "" ? moment(document.getElementById("endDate").value).format('DD/MMM/YYYY') : "present";
    ctx.fillStyle = "#ffffff";
    ctx.globalAlpha = 0.5
    ctx.font = "10pt 'MSU1', sans-serif";
    ctx.fillText(startDate + " - " + endDate, 1104, 135);
    ctx.globalAlpha = 1

    const badgeNumber = document.getElementById("badgeNumber").value;
    ctx.fillStyle = "#4881a1";
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