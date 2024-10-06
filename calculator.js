let addButton = document.getElementById("add");
let subtractButton = document.getElementById("subtract");
let divideButton = document.getElementById("divide");
let multiplyButton = document.getElementById("multiply");



function addNumbers(a, b) {
    return a + b;
}
addButton.addEventListener("click", ()=>{
    let numberA = parseFloat(document.getElementById("number1").value);
    let numberB = parseFloat(document.getElementById("number2").value);
    document.getElementById("result").textContent = addNumbers(numberA, numberB);
    
});

function subtractNumbers(a, b) {
    return a - b;
}

subtractButton.addEventListener("click", ()=>{
    let numberA = parseFloat(document.getElementById("number1").value);
    let numberB = parseFloat(document.getElementById("number2").value);
    document.getElementById("result").textContent = subtractNumbers(numberA, numberB);
    
});

function divideNumbers(a, b) {
    return a / b;
}

divideButton.addEventListener("click", ()=>{
    let numberA = parseFloat(document.getElementById("number1").value);
    let numberB = parseFloat(document.getElementById("number2").value);
    document.getElementById("result").textContent = divideNumbers(numberA, numberB);
    
});

function multiplyNumbers(a, b) {
    return a * b;
}

multiplyButton.addEventListener("click", ()=>{
    let numberA = parseFloat(document.getElementById("number1").value);
    let numberB = parseFloat(document.getElementById("number2").value);
    document.getElementById("result").textContent = multiplyNumbers(numberA, numberB);
    
});




