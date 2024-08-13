function calculate(){
    const weight=parseFloat(document.getElementById("weight").value);
    const height=parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = "Please enter valid weight and height!";
        return;
    }

    const bmi = (weight / (height ** 2)).toFixed(2);

    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    document.getElementById('result').innerText = `Your BMI is ${bmi}. You are classified as: ${category}`;
}