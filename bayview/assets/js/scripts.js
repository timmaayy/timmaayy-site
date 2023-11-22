window.onload = function () {
    document.getElementById("percentage").value = "0";
    document.getElementById("calculatedLabourPrice").innerText = "$0";
    document.getElementById("discount").innerText = "$0";
    document.getElementById("totalPrice").innerText = "$0";
    document.getElementById("clipboardMessage").innerText = "";
};

function calculateTotal() {
    var userEnteredLabourPrice = parseFloat(document.getElementById("labourPrice").value);
    var discountPercentage = parseFloat(document.getElementById("percentage").value);

    // Check if userEnteredLabourPrice is NaN, if so, set it to 0
    if (isNaN(userEnteredLabourPrice)) {
        userEnteredLabourPrice = 0;
    }

    // Check if discountPercentage is NaN, if so, set it to 0
    if (isNaN(discountPercentage)) {
        discountPercentage = 0;
    }

    // Ensure discountPercentage is not greater than 100
    if (discountPercentage > 100) {
        alert("Discount percentage cannot exceed 100%");
        document.getElementById("percentage").value = 100; // Set percentage to 100
        discountPercentage = 100; // Update discountPercentage variable
    }

    var calculatedLabourPrice = userEnteredLabourPrice * 0.15; // 15% of the entered labour price
    var discount = (calculatedLabourPrice * discountPercentage) / 100;
    var totalPrice = calculatedLabourPrice - discount;

    // Round the calculated values to the nearest whole number
    calculatedLabourPrice = Math.round(calculatedLabourPrice);
    discount = Math.round(discount);
    totalPrice = Math.round(totalPrice);

    // Update the displayed values and clipboard message
    document.getElementById("calculatedLabourPrice").innerText = "$" + calculatedLabourPrice;
    document.getElementById("discount").innerText = "$" + discount;
    document.getElementById("totalPrice").innerText = "$" + totalPrice;

    // Copy the total price to the clipboard
    var totalPriceString = "/mechoffer 0 " + totalPrice;
    var tempInput = document.createElement("input");
    tempInput.value = totalPriceString;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Display clipboard message only if totalPrice is not zero
    if (totalPrice !== 0 || discountPercentage == 100) {
        // Display clipboard message
        var clipboardMessage = document.getElementById("clipboardMessage");
        clipboardMessage.innerText = "Copied to clipboard: " + totalPriceString;
        clipboardMessage.style.color = "#28a745"; // Set the color to green, you can change it to your preference
    } else {
        // Clear clipboard message if totalPrice is zero
        document.getElementById("clipboardMessage").innerText = "";
    }
}

function resetValues() {
    // Reset input values to 0
    document.getElementById("labourPrice").value = "0";
    document.getElementById("percentage").value = "0";

    // Reset displayed values and clipboard message
    document.getElementById("calculatedLabourPrice").innerText = "$0";
    document.getElementById("discount").innerText = "$0";
    document.getElementById("totalPrice").innerText = "$0";
    document.getElementById("clipboardMessage").innerText = "";
}
