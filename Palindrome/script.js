

const checkPalindrome = () => {
    const word = document.getElementById("text-input").value.trim();
    const result = document.getElementById("result");
    console.log(word, "word")
    if (word === ""){
        alert("Please input a value");
        return
    } 
    const cleanedInput = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');

    result.innerText = isPalindrome ? word + " is a palindrome" : word + " is not a palindrome"
}
const check = document.getElementById("check-btn");
check.addEventListener("click", checkPalindrome);









