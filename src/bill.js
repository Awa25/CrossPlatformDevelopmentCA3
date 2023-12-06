var data;

// Event handler for calculate bill button.
// Press the calculate button to submit the data.
document.getElementById("BillForm").addEventListener("submit", (e) => {
    let formElemnts = new Array(...e.target.elements);
    e.preventDefault();

    // Take the data from elements and add in data variable.
    data = (formElemnts.map((e) => {
        if (e.name) {
            let inputValue = parseFloat(e.value.trim());
            return [e.name, inputValue ? parseFloat(e.value.trim()) : 0]
        }
    })).filter((e) => {
        if (e) { return e }
    })

    // Reset button is not shown when not yet calculated.
    document.getElementById("reset-btn").style.display = "block"

    // Make the result visible after hitting on calculate button.
    document.getElementById("result").style.display = "block"
    console.log(data)
    let values = data.map(values => {
        return values[1]
    })
    let units = values[0];
    let days = values[1];

    // Calculate the bill without vat.
    let billWithOutVat = units * (values[4] / 100) + days * (values[3] / 100)

    // Calculate the bill with vat.
    let billWithVat = billWithOutVat + (billWithOutVat * (13.5 / 100))

    // Make the calculated data available for display in the table.
    // Number of Units.
    document.getElementById("NOfUnits").innerText = units;
    // Billing Period (Days).
    document.getElementById("BillPerid").innerText = days;
    // Amount of Bill without VAT. Rounded values up to 2 decimal places
    document.getElementById("WithoutVAT").innerText = units + "*" + (values[4] / 100) + "+" + days + "*" + (values[3] / 100) + "=" + billWithOutVat.toFixed(2);
    // Total payable amount including VAT. Rounded values up to 2 decimal places
    document.getElementById("IncludingVAT").innerText = billWithOutVat + "+" + (billWithOutVat + "*" + (13.5 / 100)) + "=" + billWithVat.toFixed(2);
});

// Event handler for reset button.
// Press the reset button then hide the reset button and the result.
document.getElementById("reset-btn").addEventListener("click", (e) => {
    // Hide of the result.
    document.getElementById("result").style.display = "none";
    // Hide of the reset button.
    document.getElementById("reset-btn").style.display = "none"
    // Reset value of Number of Units and Billing Period (Days).
    document.getElementById("numofunits").value = '';
    document.getElementById("numofdays").value = '';
})