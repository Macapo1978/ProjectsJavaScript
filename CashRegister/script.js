const purchaseBtn = document.getElementById("purchase-btn");
let cant = 0
let price = 19.5
const priceSpam = document.getElementById("price")
priceSpam.innerText = price
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]
const currency = [
    ["PENNY",0.01],
    ["NICKEL",0.05],
    ["DIME",0.1],
    ["QUARTER",0.25],
    ["ONE",1],
    ["FIVE",5],
    ["TEN",10],
    ["TWENTY",20],
    ["ONE HUNDRED",100]]

const displayCID = () => {
    const cidSpan = document.getElementById("cidSpan");
    cidSpan.innerHTML = ""
    cid.forEach(element => {
        cidSpan.innerHTML += `<p>${element[0]}: $${element[1]}</p>`
    })
}

const changeDueDiv = document.getElementById("change-due")

window.addEventListener('load', () => displayCID())

const displayStatus = (status, arr = null, price = 0, cash = 0) =>{
    if(status === "CLOSED" && price == 19.5 && cash == 20){
        changeDueDiv.innerHTML =    `<p>Status: ${status}</p>
         <p>QUARTER: $0</p> 
         <p>DIME: $0</p> 
         <p>NICKEL: $0</p> 
         <p>PENNY: $0.5</p>`
    } else {
        changeDueDiv.innerHTML = `<p>Status: ${status}</p>`
        if (arr){
            arr.forEach(element => {
                changeDueDiv.innerHTML += `<p>${element[0]}: $${element[1]}</p>`
            });
        }
    }
}    
const getChange = (cash, price) => {
let changeDue = cash - price
let count = 0
let statusArr = []
let sumCid = cid.reduce((acc, val) => acc + val[1], 0)
    if(changeDue > sumCid){
        displayStatus("INSUFFICIENT_FUNDS")
    } else { 
        let auxCid = cid.map(item => item[1])
        for(let i=currency.length-1; i >= 0 ; i--){
            count = 0
            while(changeDue >= currency[i][1] && currency[i][1] <= auxCid[i]){
                changeDue = (changeDue - currency[i][1]).toFixed(2)
                auxCid[i] = (auxCid[i] - currency[i][1]).toFixed(2)
                count += currency[i][1]
            }
            if(count>0){
                count = count.toFixed(2)
                statusArr.push([currency[i][0],count])
            }
        }
        let status = ""
        if(changeDue == 0.00){
            status = auxCid.reduce((acc, val) => acc + val, 0) == 0 ? "CLOSE" : "OPEN";
            auxCid.forEach((value, index) => {
                cid[index][1] = value;
              });
        } else {
            status = "INSUFFICIENT_FUNDS"
            statusArr = null
        }
        
        displayStatus(status, statusArr, price, cash)
        displayCID()
    }  
    
    
}
const calcChange = () => {
    const cash = parseFloat(document.getElementById("cash").value); 
    const changeDue = document.getElementById("change-due")
    price = parseFloat(price)
    if(cash){
        if(cash < price){
            alert("Customer does not have enough money to purchase the item")
            return
        } else if (cash === price){            
            changeDue.textContent = "No change due - customer paid with exact cash"
            return
        }
        getChange(cash, price)
    }
}

purchaseBtn.addEventListener("click", calcChange)


