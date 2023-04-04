const submitBtn = document.getElementById("submit-btn");
    submitBtn.addEventListener("click", function(event) {
    	event.preventDefault();
        hitungBMI();
    });

function hitungBMI() {
    // Mendapatkan nilai berat badan dan tinggi badan dari input form
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    //Rumus menghitung nilai BMI
    const bmi = weight / ((height / 100) ** 2);

    // Menampilkan hasil perhitungan BMI dan kategori BMI pada halaman web
    const result = document.getElementById("result");
    result.innerHTML = `Your BMI is <strong>${bmi.toFixed(1)}</strong> which means You are <strong>${bmiCategory(bmi)}</strong>`;
}

// Function untuk menentukan kategori BMI berdasarkan nilai BMI
function bmiCategory(bmi) {
   	if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}
