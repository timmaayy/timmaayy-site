/* global bootstrap: false */
(function () {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })
})()

/* Pilot License Certificate */
function generateCertificateOutput() {
    // Retrieve input values
    const pilotName = document.getElementById("pilotName").value;
    const aircraftType = document.getElementById("aircraftType").value;

    const date = moment();
    const formattedDateTime = moment(date).format('DD/MMM/YYYY').toUpperCase();

    // Generate output message
    const message = '[img]https://i.imgur.com/ZFpeXl3.png[/img][divbox=white]\n\
[img]https://i.imgur.com/3i8Bk3M.png[/img][aligntable=right,350,0,0,0,0,#FFFFFF][right][font=Arial][b]\n\
[size=130]SAN ANDREAS STATE GOVERNMENT[/size]\n\
[size=115]San Andreas Aviation Administration[/size][/b][/font]\n\
\n\
[font=Times New Roman][size=150]Private Pilots License Certification[/size][/font][/right][/aligntable]\n\
[hr]\n\
[center][size=130][font=Windows Fonts][i]This is to certify that[/i][/font][/size]\n\
\n\
[font=Monotype Corsiva][size=200]' + pilotName + '[/size][/font]\n\
\n\
[font=Windows Fonts][i]Has met all the requirements of the San Andreas Aviation Administration regulations and, as appropriate, aeronautical knowledge, flight proficiency, experience and flight training, and has been examined by a competent authority and has been found to be properly qualified to exercise the privileges of:[/i]\n\
\n\
[size=125][b]San Andreas Private Pilot[/b][/size]\n\
[size=115]' + aircraftType + ' Aircraft[/size]\n\
\n\
' + formattedDateTime + '[/font][/center]\n\
\n\
[hr][/hr]\n\
\n\
[font=Windows Fonts][i]Certificate issued and approved by[/i]\n\
\n\
[fimg=160,40]https://fontmeme.com/permalink/200223/bb2ad2bc060b4bc13982ef91b6f9d995.png[/fimg]\n\
Administrator | San Andreas Aviation Administration[/font]\n\
[/divbox]\n\
[img]https://i.imgur.com/ZFpeXl3.png[/img]';

    // Display certificate output message
    document.getElementById("certificateOutput").value = message;

    const copyText = document.getElementById("certificateOutput");
    copyText.select();
    document.execCommand("copy");
}

function clearCertificateForm() {
    // Refresh the page
    location.reload();
}


/* Pilot Flight Logs */
function toggleQuestion(id) {
    var select = document.getElementById(id);
    var question;

    switch (id) {
        case "studentPilot":
            question = document.getElementById("additionalQuestion1");
            break;
        case "privatePilot":
            question = document.getElementById("additionalQuestion2");
            break;
        case "instructorPilot":
            question = document.getElementById("additionalQuestion3");
            break;
        case "commercialPilot":
            question = document.getElementById("additionalQuestion4");
            break;
    }

    if (select.value == "Yes") {
        question.style.display = "block";
    } else {
        question.style.display = "none";
    }
}

function generateLogOutput() {

    const logPilotName = document.getElementById("logPilotName").value;
    const licenseStatus = document.getElementById("licenseStatus").value;

    var studentPilot;
    if (document.getElementById("studentPilot").value == "Yes") {
        studentPilot = document.getElementById("additionalQuestion1_select").value;
    }
    else {
        studentPilot = "[ ]Student Pilot - Fixed Wing | Rotary Wing";
    }

    var privatePilot;
    if (document.getElementById("privatePilot").value == "Yes") {
        privatePilot = document.getElementById("additionalQuestion2_select").value;
    }
    else {
        privatePilot = "[ ]Private Pilot - Fixed Wing | Rotary Wing";
    }

    var instructorPilot;
    if (document.getElementById("instructorPilot").value == "Yes") {
        instructorPilot = document.getElementById("additionalQuestion3_select").value;
    }
    else {
        instructorPilot = "[ ]Instructor - Fixed Wing | Rotary Wing";
    }

    var commercialPilot;
    if (document.getElementById("commercialPilot").value == "Yes") {
        commercialPilot = document.getElementById("additionalQuestion4_select").value;
    }
    else {
        commercialPilot = "[ ]Commercial Pilot - Fixed Wing | Rotary Wing";
    }

    const logMessage = '[img]https://i.imgur.com/Xox4C1A.png[/img]\n\
\n\
[divbox=white]\n\
[list=none]\n\
\n\
[b]Pilot:[/b] ' + logPilotName + '\n\
\n\
[b]License Standing:[/b] ' + licenseStatus + '\n\
\n\
[b]Current Certifications:[/b]\n\
'+ studentPilot + '\n\
'+ privatePilot + '\n\
'+ instructorPilot + '\n\
'+ commercialPilot + '\n\
\n\
[b]Total Hours Logged[/b] ([i]Updated Weekly by Staff[/i]) : 0 Hours\n\
\n\
\n\
\n\
[center][b]FLIGHT LOGS TO BE ATTACHED BY PILOT[/b]\n\
[i](REPLY WITH THE GIVEN FORMAT)[/i]\n\
\n\
[i][color=#BF0000][b]***NOTICE - Flight Logs are to be filled within 24 hours of every flight under penalty of Law***[/b][/color][/i][/center]\n\
\n\
[spoiler=Live View]\n\
[img]https://i.imgur.com/hWCLSP8.png[/img]\n\
\n\
[divbox=#091f62][b][color=white]1. FLIGHT INFORMATION[/color][/b][/divbox]\n\
[divbox=white]\n\
[list=none]\n\
[b]Date:[/b] DD/MMM/YYYY\n\
\n\
[b]Aircraft Tail Number or Callsign:[/b] answer here\n\
\n\
[b]Passenger List:[/b] answer here\n\
\n\
[b]Departure Time:[/b] XX:XX [ooc] UTC [/ooc]\n\
\n\
[b]Departure Location:[/b] answer here\n\
\n\
[b]Arrival Location:[/b] answer here\n\
\n\
[b]Cruise Altitude:[/b] X Feet\n\
\n\
[b]Total Flight Time:[/b] X Minutes\n\
\n\
[hr][/hr]\n\
\n\
[center][color=#BF0000][size=85][b]ONLY FILL THIS SECTION IF AN EMERGENCY HAPPENED[/b][/size][/color][/center]\n\
[b]Type Of Emergency (e.g Engine Failure, Fuel Leak):[/b]\n\
answer here\n\
\n\
[b]Estimate Location Of Emergency Occurrence:[/b]\n\
answer here\n\
\n\
[b]Short Explanation:[/b]\n\
answer here\n\
\n\
[b]Attach Incident Report:[/b] [url=LINKHERE]**ATTACHMENT**[/url]\n\
[/list]\n\
\n\
[hr][/hr]\n\
\n\
[center][b]Signature:[/b]\n\
\n\
[i]Insert Here[/i]\n\
[hr][/hr]\n\
\n\
[i][color=#FF0000][size=85]By submitting this form, I certify under penalty of law the above information is correct and accurate to the best of my knowledge.[/size][/color][/i][/center][/spoiler]\n\
\n\
[code]\n\
[img]https://i.imgur.com/hWCLSP8.png[/img]\n\
\n\
[divbox=#091f62][b][color=white]1. FLIGHT INFORMATION[/color][/b][/divbox]\n\
[divbox=white]\n\
[list=none]\n\
[b]Date:[/b] DD/MMM/YYYY\n\
\n\
[b]Aircraft Tail Number or Callsign:[/b] answer here\n\
\n\
[b]Passenger List:[/b] answer here\n\
\n\
[b]Departure Time:[/b] XX:XX [ooc] UTC [/ooc]\n\
\n\
[b]Departure Location:[/b] answer here\n\
\n\
[b]Arrival Location:[/b] answer here\n\
\n\
[b]Cruise Altitude:[/b] X Feet\n\
\n\
[b]Total Flight Time:[/b] X Minutes\n\
\n\
[hr][/hr]\n\
\n\
[center][color=#BF0000][size=85][b]ONLY FILL THIS SECTION IF AN EMERGENCY HAPPENED[/b][/size][/color][/center]\n\
[b]Type Of Emergency (e.g Engine Failure, Fuel Leak):[/b]\n\
answer here\n\
\n\
[b]Estimate Location Of Emergency Occurrence:[/b]\n\
answer here\n\
\n\
[b]Short Explanation:[/b]\n\
answer here\n\
\n\
[b]Attach Incident Report:[/b] [url=LINKHERE]**ATTACHMENT**[/url]\n\
[/list]\n\
\n\
[hr][/hr]\n\
\n\
[center][b]Signature:[/b]\n\
\n\
[i]Insert Here[/i]\n\
[hr][/hr]\n\
\n\
[i][color=#FF0000][size=85]By submitting this form, I certify under penalty of law the above information is correct and accurate to the best of my knowledge.[/size][/color][/i][/center][/code]\n\
[/divbox]'

    // Display certificate output message
    document.getElementById("logOutput").value = logMessage;

    const copyText = document.getElementById("logOutput");
    copyText.select();
    document.execCommand("copy");

}

function clearLogForm() {
    // Refresh the page
    location.reload();
}