const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");

const clearInput = () => {   
    userInput.value="";
    resultsDiv.textContent = "";
}

const isValidTelNumber = () => {

    if(userInput.value === ""){
        alert("Please provide a phone number.")
        return false
    }
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    return regex.test(userInput.value);
                  
}

const checkTelNumber = () => {
    console.log(userInput.value)
    resultsDiv.textContent = isValidTelNumber() ? "Valid US number: " + userInput.value : "Invalid US number: " + userInput.value;
    userInput.value = ""
    return
}

const checkBtn = document.getElementById("check-btn");
checkBtn.addEventListener("click", checkTelNumber);
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);