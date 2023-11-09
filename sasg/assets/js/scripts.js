/* global bootstrap: false */
(function () {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })
})()

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
[b]Airframe Total Time [ooc] /mileage [/ooc]:[/b] answer here\n\
\n\
[b]Emergency Reported:[/b] [Yes / No]\n\
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
[b]Airframe Total Time [ooc] /mileage [/ooc]:[/b] answer here\n\
\n\
[b]Emergency Reported:[/b] [Yes / No]\n\
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
Date: " + formattedDateTime + "\n\
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

/* Flight Session2 */
function generateSessionTwoOutput() {
    // Retrieve input values

    const date = document.getElementById("date").value;
    const formattedDateTime = moment(date).format('DD/MMM/YYYY').toUpperCase();
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;
    const controls = document.getElementById("controls").value;
    const controlsGrade = document.getElementById("controlsGrade").value;
    const gauges = document.getElementById("gauges").value;
    const lsiaCall = document.getElementById("lsiaCall").value;
    const lsiaCallGrade = document.getElementById("lsiaCallGrade").value;
    const studentLSIACall = document.getElementById("studentLSIACall").value;
    const sandyCall = document.getElementById("sandyCall").value;
    const sandyCallGrade = document.getElementById("sandyCallGrade").value;
    const studentSandyCall = document.getElementById("studentSandyCall").value;
    const flightControls = document.getElementById("flightControls").value;
    const flightCheck = document.getElementById("flightCheck").value;
    const instructorHover = document.getElementById("instructorHover").value;
    const instructorSHops = document.getElementById("instructorSHops").value;
    const instructorHHops = document.getElementById("instructorHHops").value;
    const instructorLHops = document.getElementById("instructorLHops").value;
    const instructorDirectionalFlight = document.getElementById("instructorDirectionalFlight").value;
    const instructorFigureEight = document.getElementById("instructorFigureEight").value;
    const instructorHover2 = document.getElementById("instructorHover2").value;
    const studentHover = document.getElementById("studentHover").value;
    const studentHoverGrade = document.getElementById("studentHoverGrade").value;
    const studentSHops = document.getElementById("studentSHops").value;
    const studentSHopsGrade = document.getElementById("studentSHopsGrade").value;
    const studentHHops = document.getElementById("studentHHops").value;
    const studentHHopsGrade = document.getElementById("studentHHopsGrade").value;
    const studentLHop = document.getElementById("studentLHop").value;
    const studentLHopGrade = document.getElementById("studentLHopGrade").value;
    const studentDirectionalFlight = document.getElementById("studentDirectionalFlight").value;
    const studentDirectionalFlightGrade = document.getElementById("studentDirectionalFlightGrade").value;
    const studentFigureEight = document.getElementById("studentFigureEight").value;
    const studentFigureEightGrade = document.getElementById("studentFigureEightGrade").value;
    const sessionNotes = document.getElementById("sessionNotes").value;
    const behaviour = document.getElementById("behaviour").value;
    const behaviourDetails = document.getElementById("behaviourDetails").value;
    const takeOff = document.getElementById("takeOff").value;
    const takeOffDetails = document.getElementById("takeOffDetails").value;
    const directionalFlight = document.getElementById("directionalFlight").value;
    const directionalFlightDetails = document.getElementById("directionalFlightDetails").value;
    const approachLanding = document.getElementById("approachLanding").value;
    const approachLandingDetails = document.getElementById("approachLandingDetails").value;
    const proceed = document.getElementById("proceed").value;

    // Generate output message
    const message = "[img]https://i.imgur.com/uDGP3ab.png[/img]\n\
[divbox=white]\n\
Date: " + formattedDateTime + "\n\
Session Hours ((Please use UTC: https://time.is/UTC )): " + startTime + " > " + endTime + "\n\
[/divbox]\n\
\n\
[divbox=#091f62][b][color=white]SESSION DETAILS[/color][/b][/divbox]\n\
\n\
[divbox=white]\n\
Go through the checklist below, and mark each section with a [ x ] once completed. (YOU MUST GO THROUGH ALL OF THEM)\n\
\n\
[b]Grading System[/b]\n\
[size=125]■[/size] - [dropshadow=black][color=#FF0000]Below satisfactory performance.[/color][/dropshadow]\n\
[size=125]■■[/size] - [dropshadow=black][color=#FF8000]Needs some minor improvements.[/color][/dropshadow]\n\
[size=125]■■■[/size] - [dropshadow=black][color=#00FF00]Satisfactory. [/color][/dropshadow]\n\
[size=125]■■■■[/size] - [dropshadow=black][color=#00BF80]Outstanding, no room for improvements.[/color][/dropshadow]\n\
[size=125]■■■■■[/size] - [dropshadow=black][color=#008040]Extraordinary[/color][/dropshadow]\n\
[/divbox]\n\
[divbox=#091f62][b][color=white]Theory Session[/color][/b][/divbox]\n\
[divbox=white]\n\
" + controls + " The Instructor verifies student knowledge of the Cyclic, Collective, and Anti-Torque Pedals:\n\
[list=none]GRADE: " + controlsGrade + "[/list]\n\
" + gauges + " The instructor verifies student knowledge of the primary gauges within the instrument panel.\n\
" + lsiaCall + "  The instructor asks the student to make a mock ATC call for taxiing to a refuel station at LSIA: \n\
[list=none]GRADE: " + lsiaCallGrade + "[/list]\n\
[list]\n\
[*] Example: PHOENIX-16 to ATC, show me taxiing to LSIA fuelling station.\n\
[*] Student's Example: " + studentLSIACall + "\n\
[/list]\n\
" + sandyCall + " The instructor asks the student to make a mock ATC call for heading to Sandy Airfield from LSIA Helipad One:\n\
[list=none]GRADE: " + sandyCallGrade + "[/list]\n\
[list]\n\
[*] Example: PHOENIX-16 to ATC, show me ascending to 2000 feet above LSIA Helipad One, heading Northbound to Sandy Airfield.\n\
[*] Student's Example: " + studentSandyCall + "\n\
[/list]\n\
" + flightControls + " [ooc]The instructor goes over the student's OOC flight controls with them.[/ooc]\n\
" + flightCheck + " The instructor shows the student an example of a pre-flight check.\n\
\n\
[/divbox]\n\
[divbox=#091f62][b][color=white]Instructor's Flight[/color][/b][/divbox]\n\
\n\
[divbox=white]\n\
[b][u]The instructor is to pilot the Aircraft. Bring the Aircraft to LSIA Helipad One. The flight is to start and stop at LSIA Helipad One.[/u][/b]\n\
\n\
" + instructorHover + " The instructor showed the student how to perform a hover above LSIA Helipad One.\n\
" + instructorSHops + " The instructor showed the student how to perform short hops with the Frogger between the LSIA Helipads.\n\
" + instructorHHops + " The instructor showed the student how to perform high hops with the Frogger between the LSIA Helipads.\n\
" + instructorLHops + " The instructor showed the student how to fly to LSIA Runway 1 and showed the student how to perform a long hop to LSIA Runway 2.\n\
" + instructorDirectionalFlight + " The instructor showed the student how to perform directional flight along the LSIA Runways in the shape of an L from start to finish.\n\
" + instructorFigureEight + " The instructor showed the student how to perform figure-8's with the Frogger between the two poles near Runway 2.\n\
" + instructorHover2 + " The instructor showed the student how to hover the Frogger above LSIA Helipad One.\n\
\n\
[/divbox]\n\
[divbox=#091f62][b][color=white]Student's Flight[/color][/b][/divbox]\n\
\n\
[divbox=white]\n\
[b][u]The instructor is to hand over controls of the Frogger to the Student and allow them to practice after being shown what to do.[/u][/b]\n\
\n\
" + studentHover + " The student was able to perform a steady hover with the Frogger for a minute without error.\n\
[list=none]GRADE: " + studentHoverGrade + "[/list]\n\
" + studentSHops + " The student performed short hops with the Frogger between LSIA Helipad 1, 2, and 3.\n\
[list=none]GRADE: " + studentSHopsGrade + "[/list]\n\
" + studentHHops + " The student performed high hops with the Frogger between LSIA Helipad 1, 2, and 3.\n\
[list=none]GRADE: " + studentHHopsGrade + "[/list]\n\
" + studentLHop + " The student flew to LSIA Runway 1 and was able to perform a long hop to LSIA Runway 2.\n\
[list=none]GRADE: " + studentLHopGrade + "[/list]\n\
" + studentDirectionalFlight + " The student was able to perform directional flight along the LSIA Runways in the shape of an L from start to finish.\n\
[list=none]GRADE: " + studentDirectionalFlightGrade + "[/list]\n\
" + studentFigureEight + " The student was able to perform figure-8's with the Frogger between the two poles near Runway 2.\n\
[list=none]GRADE: " + studentFigureEightGrade + "[/list]\n\
\n\
[/divbox]\n\
[divbox=#091f62][b][color=white]Session Notes[/color][/b][/divbox]\n\
[divbox=white]\n\
[b]Session Notes are important to tell us how a student performed in their flight training session. A lot of the notes will be included in the actual grading below and in other areas, so there's not much that you're required to say here.[/b] [color=red]MINIMUM 30 WORDS[/color]\n\
\n\
" + sessionNotes +
"\n\
[color=transparent]SPACER[/color]\n\
[/divbox]\n\
[divbox=#091f62][b][color=white]Overall Grade[/color][/b][/divbox]\n\
[divbox=white]\n\
\n\
[list]\n\
[*] The student's general behavior and attention span: " + behaviour + "\n\
[list]\n\
[*] " + behaviourDetails + "\n\
[/list]\n\
[*] The student's ability to perform a take-off: " + takeOff + "\n\
[list]\n\
[*] " + takeOffDetails + "\n\
[/list]\n\
[*] The student's ability to perform directional flight: " + directionalFlight + "\n\
[list]\n\
[*] " + directionalFlightDetails + "\n\
[/list]\n\
[*] The student's ability to conduct an approach and landing: " + approachLanding + "\n\
[list]\n\
[*] " + approachLandingDetails + "\n\
[/list]\n\
[*] Do you think the student can proceed to the next session?\n\
[list]\n\
[*] " + proceed + "\n\
[/list]\n\
\n\
[/divbox]";

    // Display certificate output message
    document.getElementById("reportOutput").value = message;

    const copyText = document.getElementById("reportOutput");
    copyText.select();
    document.execCommand("copy");
}

function clearSessionTwoForm() {
    // Refresh the page
    location.reload();
}

/** Setting UTC Time & Date */

function setUTCDate() {
    var now = new Date();
    var dateField = document.getElementById("date");
    var utcDate = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
    var yyyy = utcDate.getUTCFullYear();
    var mm = ('0' + (utcDate.getUTCMonth() + 1)).slice(-2);
    var dd = ('0' + utcDate.getUTCDate()).slice(-2);
    dateField.value = yyyy + "-" + mm + "-" + dd;
}

function setUTCStartTime() {
    var now = new Date();
    var hh = now.getUTCHours().toString().padStart(2, '0');
    var mm = now.getUTCMinutes().toString().padStart(2, '0');
    var timeStr = hh + ':' + mm;
    document.getElementById('startTime').value = timeStr;
}

function setUTCEndTime() {
    var now = new Date();
    var hh = now.getUTCHours().toString().padStart(2, '0');
    var mm = now.getUTCMinutes().toString().padStart(2, '0');
    var timeStr = hh + ':' + mm;
    document.getElementById('endTime').value = timeStr;
}

/* Flight Session3 */
function generateSessionThreeOutput() {
    // Retrieve input values

    const date = document.getElementById("date").value;
    const formattedDateTime = moment(date).format('DD/MMM/YYYY').toUpperCase();
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;
    const altitude = document.getElementById("altitude").value;
    const airspace = document.getElementById("airspace").value;
    const weather = document.getElementById("weather").value;
    const flightCheck = document.getElementById("flightCheck").value;
    const flightCheckGrade = document.getElementById("flightCheckGrade").value;
    const studentRoleplay = document.getElementById("studentRoleplay").value;
    const call1 = document.getElementById("call1").value;
    const call2 = document.getElementById("call2").value;
    const call3 = document.getElementById("call3").value;
    const call4 = document.getElementById("call4").value;
    const call5 = document.getElementById("call5").value;
    const call6 = document.getElementById("call6").value;
    const call7 = document.getElementById("call7").value;
    const call8 = document.getElementById("call8").value;
    const call9 = document.getElementById("call9").value;
    const emergencyLanding = document.getElementById("emergencyLanding").value;
    const emergencyLandingGrade = document.getElementById("emergencyLandingGrade").value;
    const atcCommunication = document.getElementById("atcCommunication").value;
    const atcCall = document.getElementById("atcCall").value;
    const landingProdceedures = document.getElementById("landingProdceedures").value;
    const sessionNotes = document.getElementById("sessionNotes").value;
    const behaviour = document.getElementById("behaviour").value;
    const behaviourDetails = document.getElementById("behaviourDetails").value;
    const takeOff = document.getElementById("takeOff").value;
    const takeOffDetails = document.getElementById("takeOffDetails").value;
    const directionalFlight = document.getElementById("directionalFlight").value;
    const directionalFlightDetails = document.getElementById("directionalFlightDetails").value;
    const approachLanding = document.getElementById("approachLanding").value;
    const approachLandingDetails = document.getElementById("approachLandingDetails").value;
    const airTrafficControl = document.getElementById("airTrafficControl").value;
    const airTrafficControlDetails = document.getElementById("airTrafficControlDetails").value;
    const proceed = document.getElementById("proceed").value;

    // Generate output message
    const message = "[img]https://i.imgur.com/xhXuAFN.png[/img]\n\
[divbox=white]\n\
Date: " + formattedDateTime + "\n\
Session Hours ((Please use UTC: https://time.is/UTC )): " + startTime + " > " + endTime + "\n\
[/divbox]\n\
\n\
[divbox=#091f62][b][color=white]SESSION DETAILS[/color][/b][/divbox]\n\
\n\
[divbox=white]\n\
Go through the checklist below, and mark each section with a [ x ] once completed. (YOU MUST GO THROUGH ALL OF THEM)\n\
\n\
[b]Grading System[/b]\n\
[size=125]■[/size] - [dropshadow=black][color=#FF0000]Below satisfactory performance.[/color][/dropshadow]\n\
[size=125]■■[/size] - [dropshadow=black][color=#FF8000]Needs some minor improvements.[/color][/dropshadow]\n\
[size=125]■■■[/size] - [dropshadow=black][color=#00FF00]Satisfactory. [/color][/dropshadow]\n\
[size=125]■■■■[/size] - [dropshadow=black][color=#00BF80]Outstanding, no room for improvements.[/color][/dropshadow]\n\
[size=125]■■■■■[/size] - [dropshadow=black][color=#008040]Extraordinary[/color][/dropshadow]\n\
[/divbox]\n\
\n\
[divbox=#091f62][b][color=white]Theory Session[/color][/b][/divbox]\n\
[divbox=white]\n\
" + altitude + " The instructor verifies the student's knowledge of altitude whilst operating an Aircraft. (2000FT city, 750FT outside city, and 500FT or higher above emergency aircrafts).\n\
" + airspace + " The instructor verifies the student's knowledge of No Fly Zones and Caution Zones.\n\
[list]\n\
[*] Caution Zones are permitted to be entered, but extra caution utilizing your instruments and visuals should be taken as they're hot-spots for takeoffs and landings.\n\
[*] No Fly Zones are off-limit areas that should not be entered under any circumstances.\n\
[*] If No Fly Zones are entered without authorization (i.e. emergency landing), you must submit an incident report.\n\
[/list]\n\
\n\
[/divbox]\n\
[divbox=#091f62][b][color=white]Pre-Flight Check[/color][/b][/divbox]\n\
[divbox=white]\n\
[b]The instructor showed the student how to perform a pre-flight check during FTS-2. Now, it is their turn.[/b]\n\
\n\
" + flightCheck + " The student was able to perform a pre-flight check on the aircraft, both internally and externally.\n\
[list=none]GRADE: " + flightCheckGrade + "[/list]\n\
[ooc][spoiler=Student's RP]\n\
" + studentRoleplay + "\n\
[/spoiler][/ooc]\n\
\n\
[/divbox]\n\
[divbox=#091f62][b][color=white]ATC Communication[/color][/b][/divbox]\n\
[divbox=white]\n\
[b]SAAA Hangar --> LSIA Helipad One (taxi) --> Sandy Airfield --> SAAA Paleto Helipad One --> LSIA Helipad One[/b]\n\
[hr][/hr]\n\
[b]Please write down their exact phrasing of communication with ATC word for word. There should be a total of 7 calls to ATC.[/b]\n\
\n\
[list]\n\
[*] " + call1 + "\n\
[*] " + call2 + "\n\
[*] " + call3 + "\n\
[*] " + call4 + "\n\
[*] " + call5 + "\n\
[*] " + call6 + "\n\
[*] " + call7 + "\n\
[*] " + call8 + "\n\
[*] " + call9 + "\n\
[/list]\n\
\n\
[/divbox]\n\
[divbox=#091f62][b][color=white]Emergency Landing[/color][/b][/divbox]\n\
[divbox=white]\n\
[b]The instructor is to attempt to roleplay a realistic emergency landing scenario. Include any notes about the emergency landing within the session notes below. (Ex: Oh no... ohhhh no no no that's not good, your tail rotor is on fire! We need to conduct an emergency landing fast!!)[/b]\n\
\n\
[list=none]\n\
" + emergencyLanding + " The student conducted an emergency landing.\n\
[list=none]GRADE: " + emergencyLandingGrade + "[/list]\n\
" + atcCommunication + " The student correctly communicated with ATC\n\
[list]\n\
[*] " + atcCall + "\n\
[/list]\n\
" + landingProdceedures + " The student was informed about the procedures after conducting an emergency landing.\n\
[list]\n\
[*] Make every effort to get in contact with someone from SAAA. Call 911 and get assistance from local law enforcement.\n\
[*] Have a mechanic come for a repair.\n\
[*] Create an incident report.\n\
[/list]\n\
[/list]\n\
[/divbox]\n\
[divbox=#091f62][b][color=white]Session Notes[/color][/b][/divbox]\n\
[divbox=white]\n\
[b]As the flight instructor, you are required to give a detailed report in regard to the guided flight session below. Instead of grading each travel, you can grade their overall abilities combined in the final section.[/b] [color=red]MINIMUM 50 WORDS[/color]\n\
\n\
\n\
" + sessionNotes + " \n\
\n\
[color=transparent]SPACER[/color]\n\
[/divbox]\n\
[divbox=#091f62][b][color=white]Overall Grade[/color][/b][/divbox]\n\
[divbox=white]\n\
\n\
[list]\n\
[*] The student's general behavior and attention span: " + behaviour + "\n\
[list]\n\
[*] " + behaviourDetails + "\n\
[/list]\n\
[*] The student's ability to perform a take-off: " + takeOff + "\n\
[list]\n\
[*] " + takeOffDetails + "\n\
[/list]\n\
[*] The student's ability to perform directional flight: " + directionalFlight + "\n\
[list]\n\
[*] " + directionalFlightDetails + "\n\
[/list]\n\
[*] The student's ability to perform an approach and landing: " + approachLanding + "\n\
[list]\n\
[*] " + approachLandingDetails + "\n\
[/list]\n\
[*] The student's ability to communicate with Air Traffic Control: " + airTrafficControl + "\n\
[list]\n\
[*] " + airTrafficControlDetails + "\n\
[/list]\n\
[*] Do you think the student can proceed to the final examination?\n\
[list]\n\
[*] " + proceed + "\n\
[/list]\n\
[/divbox]";

    // Display certificate output message
    document.getElementById("reportOutput").value = message;

    const copyText = document.getElementById("reportOutput");
    copyText.select();
    document.execCommand("copy");
}

function clearSessionThreeForm() {
    // Refresh the page
    location.reload();
}