const diseaseOptions = document.querySelectorAll('.disease-options button');
const diseaseForm = document.getElementById('disease-form');
const predictButton = document.getElementById('predict-button');
const predictionResult = document.getElementById('prediction-result');

diseaseOptions.forEach(button => {
  button.addEventListener('click', () => {
    const disease = button.dataset.disease;
    diseaseForm.innerHTML = ''; // Clear existing form elements
    
    // Add specific form elements based on the selected disease
    if (disease === 'diabetes') {
      diseaseForm.innerHTML = `
        <label for="blood-sugar">Blood Sugar (mg/dL):</label>
        <input type="number" id="blood-sugar" required>
      `;
    } else if (disease === 'bp') {
      diseaseForm.innerHTML = `
        <label for="systolic">Systolic BP (mmHg):</label>
        <input type="number" id="systolic" required>
        <label for="diastolic">Diastolic BP (mmHg):</label>
        <input type="number" id="diastolic" required>
      `;
    } else if (disease === 'thyroid') {
      diseaseForm.innerHTML = `
        <label for="tsh">TSH Level (mIU/L):</label>
        <input type="number" id="tsh" required>
      `;
    } else if (disease === 'cholesterol') {
      diseaseForm.innerHTML = `
        <label for="total-cholesterol">Total Cholesterol (mg/dL):</label>
        <input type="number" id="total-cholesterol" required>
        <label for="hdl">HDL Cholesterol (mg/dL):</label>
        <input type="number" id="hdl" required>
      `;
    } else if (disease === 'obesity') {
      diseaseForm.innerHTML = `
        <label for="height">Height (cm):</label>
        <input type="number" id="height" required>
        <label for="weight">Weight (kg):</label>
        <input type="number" id="weight" required>
      `;
    }
  });
});

predictButton.addEventListener('click', () => {
  const disease = diseaseOptions.find(button => button.classList.contains('active')).dataset.disease;
  const inputs = diseaseForm.querySelectorAll('input');
  
  // Validate user input
  let isValid = true;
  inputs.forEach(input => {
    if (!input.value) {
      isValid = false;
      alert('Please fill in all required fields.');
    }
  });
  
  if (isValid) {
    // Process user input and predict disease based on disease-specific parameters
    let prediction = 'No Prediction Available';
    if (disease === 'diabetes') {
      const bloodSugar = parseFloat(document.getElementById('blood-sugar').value);
      if (bloodSugar >= 126) {
        prediction = 'Possible Diabetes';
      }
    } else if (disease === 'bp') {
      const systolic = parseFloat(document.getElementById('systolic').value);
      const diastolic = parseFloat(document.getElementById('diastolic').value);
      if (systolic >= 140 || diastolic >= 90) {
        prediction = 'Possible High Blood Pressure';
      }
    } else if (disease === 'thyroid') {
      const tsh = parseFloat(document.getElementById('tsh').value);
      if (tsh < 0.5 || tsh > 4.5) {
        prediction = 'Possible Thyroid Dysfunction';
      }
    } else if (disease === 'cholesterol') {
      const totalCholesterol = parseFloat(document.getElementById('total-cholesterol').value);
      const hdl = parseFloat(document.getElementById('hdl').value);
      if (totalCholesterol >= 200 || hdl < 40) {
        prediction = 'Possible High Cholesterol';
      }
    } else if (disease === 'obesity') {
      const height = parseFloat(document.getElementById('height').value);
      const weight = parseFloat(document.getElementById('weight').value);
      const bmi = weight / (height/100 * height/100);
      if (bmi >= 30) {
        prediction = 'Possible Obesity';
      }
    }
    
    predictionResult.textContent = prediction;
  }
});