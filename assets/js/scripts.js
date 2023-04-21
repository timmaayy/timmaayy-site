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

/* Flight Session 1 */
function generateSessionOneOutput() {
    // Retrieve input values
    const date = document.getElementById("date").value;
    const formattedDateTime = moment(date).format('DD/MMM/YYYY').toUpperCase();
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;
    const altitude = document.getElementById("altitude").value;
    const communication = document.getElementById("communication").value;
    const mapRestrictions = document.getElementById("mapRestrictions").value;
    const hazardZones = document.getElementById("hazardZones").value;
    const landingLocations = document.getElementById("landingLocations").value;
    const emergencyLandings = document.getElementById("emergencyLandings").value;
    const preFlightInspection = document.getElementById("preFlightInspection").value;
    const weatherConditions = document.getElementById("weatherConditions").value;
    const flightlogs = document.getElementById("flightlogs").value;
    const mainRotor = document.getElementById("mainRotor").value;
    const tailRotor = document.getElementById("tailRotor").value;
    const engine = document.getElementById("engine").value;
    const landingGear = document.getElementById("landingGear").value;
    const cyclic = document.getElementById("cyclic").value;
    const collective = document.getElementById("collective").value;
    const throttle = document.getElementById("throttle").value;   
    const pedals = document.getElementById("pedals").value;
    const airspeed = document.getElementById("airspeed").value;
    const altimeter = document.getElementById("altimeter").value;
    const artificialHorizon = document.getElementById("artificialHorizon").value;
    const headingIndicator = document.getElementById("headingIndicator").value;
    const verticalSpeedIndicator = document.getElementById("verticalSpeedIndicator").value;
    const fuelGauge = document.getElementById("fuelGauge").value;
    const sessionNotes = document.getElementById("sessionNotes").value;
    const behaviour = document.getElementById("behaviour").value;
    const understand = document.getElementById("understand").value;
    const questions = document.getElementById("questions").value;
    const behaviourDetails = document.getElementById("behaviourDetails").value;
    const understandDetails = document.getElementById("understandDetails").value;
    const questionsDetails = document.getElementById("questionsDetails").value;
 
    // Generate output message
    const message = "[img]https://i.imgur.com/Lbi1XvO.png[/img]\n\
\n\
[divbox=white]\n\
Date: " + date + "\n\
Session Hours ((Please use UTC: https://time.is/UTC )): " + startTime + " > " + endTime + "\n\
[/divbox]\n\
\n\
[divbox=#091f62][b][color=white]SESSION DETAILS[/color][/b][/divbox]\n\
\n\
[divbox=white]\n\
Go through the checklist below, and mark each section with a [ x ] once completed. (YOU MUST GO THROUGH ALL OF THEM)\n\
[/divbox]\n\
\n\
[divbox=#091f62][b][color=white]Aviation Guidelines[/color][/b][/divbox]\n\
\n\
[divbox=white]\n\
[list]" + altitude + " Explained ALTITUDE[/list]\n\
[list]" + communication + " Explained COMMUNICATION[/list]\n\
[list]" + mapRestrictions + " Explained MAP AND RESTRICTIONS[/list]\n\
[list]" + hazardZones + " Explained HAZARD ZONES[/list]\n\
[list]" + landingLocations + " Explained LANDING LOCATIONS[/list]\n\
[list]" + emergencyLandings + " Explained EMERGENCY LANDINGS[/list]\n\
[list]" + preFlightInspection + " Explained PRE-FLIGHT INSPECTION[/list]\n\
[list]" + weatherConditions + " Explained WEATHER CONDITIONS[/list]\n\
[list]" + flightlogs + " Explained FLIGHT LOGS AND REPORTS[/list]\n\
[/divbox]\n\
\n\
[divbox=#091f62][b][color=white]External Anatomy[/color][/b][/divbox]\n\
\n\
[divbox=white]\n\
[list]" + mainRotor + " Shown the location of the MAIN ROTOR and explained its use[/list]\n\
[list]" + tailRotor + " Shown the location of the TAIL ROTOR and explained its use[/list]\n\
[list]" + engine + " Shown the location of the ENGINE and explained its use[/list]\n\
[list]" + landingGear + " Shown the location of the LANDING GEAR and explained its use[/list]\n\
[/divbox]\n\
\n\
[divbox=#091f62][b][color=white]Internal Anatomy[/color][/b][/divbox]\n\
\n\
[divbox=white]\n\
[list]" + cyclic + " Explained the use of the CYCLIC[/list]\n\
[list]" + collective + " Explained the use of the COLLECTIVE[/list]\n\
[list]" + throttle + " Explained the use of the THROTTLE[/list]\n\
[list]" + pedals + " Explained the use of the PEDALS[/list]\n\
[/divbox]\n\
\n\
[divbox=#091f62][b][color=white]Flight Instrument Panel[/color][/b][/divbox]\n\
\n\
[divbox=white]\n\
[list]" + airspeed + " Shown and explained what the AIRSPEED INDICATOR shows/does[/list]\n\
[list]" + altimeter + " Shown and explained what the ALTIMETER shows/does[/list]\n\
[list]" + artificialHorizon + " Shown and explained what the ARTIFICIAL HORIZON shows/does[/list]\n\
[list]" + headingIndicator + " Shown and explained what the HEADING INDICATOR shows/does[/list]\n\
[list]" + verticalSpeedIndicator + " Shown and explained what the VERTICAL SPEED INDICATOR shows/does[/list]\n\
[list]" + fuelGauge + " Shown and explained what the FUEL GAUGE shows/does[/list]\n\
[/divbox]\n\
\n\
[divbox=#091f62][b][color=white]Session Notes[/color][/b][/divbox]\n\
[divbox=white]" + sessionNotes +
"[/divbox]\n\
[divbox=#091f62][b][color=white]Grade System[/color][/b][/divbox]\n\
\n\
[divbox=white]\n\
[size=125]■[/size] - [dropshadow=black][color=#FF0000]Below satisfactory performance.[/color][/dropshadow]\n\
[size=125]■■[/size] - [dropshadow=black][color=#FF8000]Needs some minor improvements.[/color][/dropshadow]\n\
[size=125]■■■[/size] - [dropshadow=black][color=#00FF00]Satisfactory. [/color][/dropshadow]\n\
[size=125]■■■■[/size] - [dropshadow=black][color=#00BF80]Outstanding, no room for improvements.[/color][/dropshadow]\n\
[size=125]■■■■■[/size] - [dropshadow=black][color=#008040]Extraordinary[/color][/dropshadow]\n\
\n\
\n\
[list]\n\
[*] The student's general behaviour and attention span: " + behaviour + "\n\
[list]\n\
[*] " + behaviourDetails + "\n\
[/list]\n\
[*] The student's ability to understand each component of an aircraft : " + understand + "\n\
[list]\n\
[*] " + understandDetails + "\n\
[/list]\n\
[*] The student's answers to any of your questions: " + questions + "\n\
[list]\n\
[*] " + questionsDetails + "\n\
[/list]\n\
[/divbox]";

    // Display certificate output message
    document.getElementById("reportOutput").value = message;

    const copyText = document.getElementById("reportOutput");
    copyText.select();
    document.execCommand("copy");
}

function clearSessionOneForm() {
    // Refresh the page
    location.reload();
}