function convertDimensions() {
    const dim1_in = document.getElementById("dim1_inches").value;
    const dim2_in = document.getElementById("dim2_inches").value;
    const resultEl = document.getElementById("dimResult");

    // Validate the input
    if (!dim1_in || !dim2_in || isNaN(dim1_in) || isNaN(dim2_in)) {
        resultEl.innerText = "Please enter valid numbers in both fields.";
        return;
    }

    const dim1_ft = parseFloat(dim1_in) / 12;
    const dim2_ft = parseFloat(dim2_in) / 12;
    
    // Display the result rounded to 2 decimal places
    resultEl.innerHTML = `<strong>${dim1_ft.toFixed(2)} ft × ${dim2_ft.toFixed(2)} ft</strong>`;
}
