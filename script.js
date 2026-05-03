// --- 1. SECTION NAVIGATION LOGIC ---
// Using basic function declarations like your checkRegister() example

function showSection(sectionName) {
    // We grab the elements by ID and change their style
    document.getElementById('app-section').style.display = 'none';
    document.getElementById('description-section').style.display = 'none';
    document.getElementById('author-section').style.display = 'none';

    // Show the specific section
    document.getElementById(sectionName + '-section').style.display = 'block';
}

// --- 2. AKAN NAME LOGIC ---
// Using Arrays and If/Else Statements (just like checkCoffeeTempertature)

function getResult() {
    // Variables to store the input values
    const dateValue = document.getElementById("date").value;
    const genders = document.getElementsByName("gender");
    let selectedGender = "";

    // Loop to find which radio button is checked
    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            selectedGender = genders[i].value;
        }
    }

    // Validation using IF statement
    if (dateValue === "" || selectedGender === "") {
        alert("Kwani umesahau kuweka date? Please fill everything!");
        return;
    }

    // Get the day of the week (0-6)
    const myDate = new Date(dateValue);
    const dayIndex = myDate.getDay(); 

    // Arrays (Object data types) for names
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let resultName = "";

    // Conditional logic (If/Else) to pick the name
    if (selectedGender === "male") {
        resultName = maleNames[dayIndex];
    } else {
        resultName = femaleNames[dayIndex];
    }

    // Output the result to the screen
    document.getElementById("show-name").innerHTML = "Your Akan name is: " + resultName;
}