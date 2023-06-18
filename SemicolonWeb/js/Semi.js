function add() {
let num1 = parseInt(document.getElementById("num1").value);

let num2 = parseInt(document.getElementById("num2").value);

 let sum = num1 + num2;
  document.getElementById("result").innerHTML = sum;
}
function subtract() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let difference = num1 - num2;

  document.getElementById("result").innerHTML = difference;
}

function multiply() {
let num1 = parseInt(document.getElementById("num1").value);

let num2 = parseInt(document.getElementById("num2").value);

let product = num1 * num2;

document.getElementById("result").innerHTML = product;
}

function factorial() {
let num = parseInt(document.getElementById("num").value);

let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

document.getElementById("result").innerHTML = factorial;
}


function fibonacci() {
let num = parseInt(document.getElementById("num").value);
  let a = 0;
  let b = 1;

  for (let i = 0; i < num; i++) {
    let c = a + b;
    a = b;
    b = c;
  }


  document.getElementById("result").innerHTML = b;
}

document.getElementById("add").addEventListener("click", add);
document.getElementById("minus").addEventListener("click", subtract);
document.getElementById("times").addEventListener("click", multiply);
document.getElementById("fact").addEventListener("click", factorial);
document.getElementById("fibo").addEventListener("click", fibonacci);
