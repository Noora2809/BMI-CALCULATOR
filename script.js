function calculateBMI() {
    var age = parseFloat(document.getElementById('age').value);
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(age) || isNaN(height) || isNaN(weight) || age <= 0 || height <= 0 || weight <= 0) {
        alert('Please enter valid values for Age, Height, and Weight.');
        return;
    }

    var bmi = weight / Math.pow(height, 2);
    var bmiCategory = getBMICategory(bmi);

    document.getElementById('result').innerHTML = 'Your BMI is: ' + bmi.toFixed(2) + '<br>Category: ' + bmiCategory;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal Weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

function resetForm() {
    document.getElementById('age').value = '';
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
    document.getElementById('result').innerHTML = '';
}
