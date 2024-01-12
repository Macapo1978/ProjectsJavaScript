const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
output.innerHTML = "";
const isValidNumber = (number) => {
   
    if (isNaN(number)){
        output.innerText = "Please enter a valid number";
        return false
    } else if (number < 1){
        output.innerText = "Please enter a number greater than or equal to 1";
        return false
    } else if (number >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
        return false
    }
    return true
}

const convertRoman = () =>{
    let number = parseInt(inputNumber.value);
    let result = ""

    if (isValidNumber(number)){
            const romanArr = [
                ["M",1000],
                ["CM",900],
                ["D",500],
                ["CD",400],
                ["C",100],
                ["XC",90],
                ["L",50],
                ["XL",40],
                ["X",10],
                ["IX",9],
                ["V",5],
                ["IV",4],
                ["I",1]]

            for (let i=0; i < romanArr.length; i++){

                while (number >= romanArr[i][1]){
                    result += romanArr[i][0];
                    number -= romanArr[i][1];
                }
            }
            
            output.innerText = result;
            return
    }

}

convertBtn.addEventListener("click", convertRoman);
inputNumber.addEventListener("keypress", (e)=>{
    if (e.key === "Enter"){
        convertRoman();
    }
})
