const CalcBtn = document.querySelector("#CalcBtn");
const displayResult = document.querySelector(".result");

CalcBtn.addEventListener("click", (e) => {
    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);

    if (!isNaN(height) && !isNaN(weight)) {
        const heightInMeters = height / 100;
        let result = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        displayResult.innerHTML = `<p>Your BMI : ${result} </p>`
    } else {
        alert("Enter valid height and weight");
    }
});