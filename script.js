function calculateBMI() {
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value);
    var gender = document.getElementById("gender").value;
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
  
    if (isNaN(age) || isNaN(height) || isNaN(weight) || age <= 0 || height <= 0 || weight <= 0) {
      alert("Please enter valid values for age, height, and weight.");
      return;
    }
  
    var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
  
    var result = `${name}, ${age} years old, your BMI is: ${bmi}`;
  
    if (bmi < 18.5) {
      result += " (Underweight)";
      showDietChart("Underweight");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      result += " (Normal weight)";
      showDietChart("Normal weight");
    } else if (bmi >= 25 && bmi < 29.9) {
      result += " (Overweight)";
      showDietChart("Overweight");
    } else {
      result += " (Obese)";
      showDietChart("Obese");
    }
  
    document.getElementById("result").innerHTML = result;
  }
  
  function showDietChart(bmiCategory) {
    var dietChart = "";
    switch (bmiCategory) {
      case "Underweight":
        dietChart = "Diet Chart for Underweight: Include more protein and healthy fats in your diet. Eat frequent, small meals.";
        break;
      case "Normal weight":
        dietChart = "Diet Chart for Normal weight: Maintain a balanced diet with a variety of fruits, vegetables, lean proteins, and whole grains.";
        break;
      case "Overweight":
        dietChart = "Diet Chart for Overweight: Focus on portion control, reduce intake of processed foods, and increase physical activity.";
        break;
      case "Obese":
        dietChart = "Diet Chart for Obese: Consult a healthcare professional for personalized advice. Emphasize a balanced diet and regular exercise.";
        break;
      default:
        break;
    }
  
    document.getElementById("diet-chart").innerHTML = dietChart;
  }

  

  