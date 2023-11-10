window.onload = function () {
    document.getElementById("totalCost").innerText = "$0";
};

function calculateTotal() {
    console.log("calculateTotal function called");

    // Retrieve values from input fields
    var xValue = parseFloat(document.getElementById("xValue").value);
    var yValue = parseFloat(document.getElementById("yValue").value);
    var zValue = parseFloat(document.getElementById("zValue").value);
    var extraValue = parseFloat(document.getElementById("extras").value);
    var zoneValue = document.getElementById("propertyZone").value;

    console.log("xValue:", xValue);
    console.log("yValue:", yValue);
    console.log("zValue:", zValue);
    console.log("extraValue:", extraValue);
    console.log("zoneValue:", zoneValue);

    // Check if X, Y, and Z are all zero
    if (xValue === 0 || yValue === 0 || zValue === 0) {
        alert("X, Y, and Z values cannot be zero. Please enter valid values.");
        return; // Stop further execution
    }

    // Check if Extras value is above the limit
    if (extraValue > 100000) {
        alert("Extras cannot exceed $100,000. Please enter a valid value.");
        return; // Stop further execution
    }

    // Calculate total price based on the formula
    var totalPrice;
    if (zoneValue === "low") {
        totalPrice = ((150 * xValue) + (150 * yValue) + (100 * zValue) + (extraValue / 1000)) * 1000;
    } else if (zoneValue === "medium") {
        totalPrice = ((150 * xValue) + (150 * yValue) + (100 * zValue) + (extraValue / 1000)) * 1250;
    } else {
        totalPrice = ((150 * xValue) + (150 * yValue) + (100 * zValue) + (extraValue / 1000)) * 1500;
    }

    // Display the calculated values with thousand separators
    document.getElementById("totalCost").textContent = "$" + totalPrice.toLocaleString();
}

function resetValues() {
    // Reset input values to 0
    document.getElementById("xValue").value = "0";
    document.getElementById("yValue").value = "0";
    document.getElementById("zValue").value = "0";
    document.getElementById("extras").value = "0";
    document.getElementById("propertyZone").value = "low";

    // Reset displayed values
    document.getElementById("totalCost").innerText = "$0";
}

function openImage() {
    window.open('assets/img/phb-zones.png', '_blank');
}