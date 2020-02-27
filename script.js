let nextOperand = "";
let previousOperand = "";
let currentOperand = "";
let operator = "";
let nextOperator = "";
const button = document.querySelectorAll(".button");
const clearEntry = document.querySelector(".clearentry");
const clear = document.querySelector(".clear");
const ceKey = document.querySelector(".clearentry");
const posNeg = document.querySelector(".posneg");
const delKey = document.querySelector(".delete");
const addKey = document.querySelector(".add");
const subKey = document.querySelector(".sub");
const mulKey = document.querySelector(".multiply");
const divKey = document.querySelector(".divide");
const invKey = document.querySelector(".invert");
const sqKey = document.querySelector(".squared");
const rootKey = document.querySelector(".root");
const dotKey = document.querySelector(".dot")
const evaluateKey = document.querySelector(".equal");
const displayWindow = document.getElementById("display");

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    currentOperand = "";
    return "You can't divide by zero!";
  } else {
    return a / b;
  }
}

function operate(op, a, b) {
  if (op == "+") {
    currentOperand = add(Number(a), Number(b));
    displayWindow.textContent = currentOperand;
  } else if (op == "-") {
    currentOperand = sub(Number(a), Number(b));
    displayWindow.textContent = currentOperand;
  } else if (op == "*") {
    currentOperand = multiply(Number(a), Number(b));
    displayWindow.textContent = currentOperand;
  } else if (op == "/") {
    currentOperand = divide(Number(a), Number(b));
    displayWindow.textContent = currentOperand;
  }
  operator = "";
}

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    if (currentOperand == "") {
      currentOperand = button[i].value;
      displayWindow.textContent = currentOperand;
    } else {
      currentOperand += button[i].value;
      displayWindow.textContent = currentOperand;
    }
  });
}

dotKey.addEventListener("mouseenter", () => {
  if (displayWindow.textContent.match(/\./g)) {
    dotKey.disabled = true;
} else {
  dotKey.disabled = false;
}
})

clear.addEventListener("click", () => {
  currentOperand = "";
  previousOperand = "";
  operator = "";
  displayWindow.textContent = currentOperand;
});

ceKey.addEventListener("click", () => {
  currentOperand = "";
  displayWindow.textContent = currentOperand;
});

delKey.addEventListener("click", () => {
  currentOperand = displayWindow.textContent.slice(
    0,
    currentOperand.length - 1
  );
  displayWindow.textContent = currentOperand;
});

posNeg.addEventListener("click", () => {
  if (displayWindow.textContent !== "You can't divide by zero!")
    displayWindow.textContent *= -1
    currentOperand = displayWindow.textContent;
});

invKey.addEventListener("click", () => {
  if (displayWindow.textContent !== "You can't divide by zero!")
    displayWindow.textContent = currentOperand = 1 / Number(currentOperand);
});

sqKey.addEventListener("click", () => {
  if (displayWindow.textContent !== "You can't divide by zero!")
    displayWindow.textContent = currentOperand = Math.pow(
      Number(currentOperand),
      2
    );
    currentOperand = displayWindow.textContent;
});

rootKey.addEventListener("click", () => {
  if (displayWindow.textContent !== "You can't divide by zero!")
    displayWindow.textContent = currentOperand = Math.sqrt(
      Number(currentOperand)
    );
    currentOperand = displayWindow.textContent;
});

addKey.addEventListener("click", () => {
  if (operator != "")
    operate(operator, Number(previousOperand), Number(currentOperand));
  if (
    displayWindow.textContent != "" &&
    currentOperand == "" &&
    displayWindow.textContent !== "You can't divide by zero!"
  )
    currentOperand = displayWindow.textContent;
  if (currentOperand != "") previousOperand = currentOperand;
  currentOperand = "";
  operator = "+";
});

subKey.addEventListener("click", () => {
  if (operator != "")
    operate(operator, Number(previousOperand), Number(currentOperand));
  if (
    displayWindow.textContent != "" &&
    currentOperand == "" &&
    displayWindow.textContent !== "You can't divide by zero!"
  )
    currentOperand = displayWindow.textContent;
  if (currentOperand != "") previousOperand = currentOperand;
  currentOperand = "";
  operator = "-";
});

mulKey.addEventListener("click", () => {
  if (operator != "")
    operate(operator, Number(previousOperand), Number(currentOperand));
  if (
    displayWindow.textContent != "" &&
    currentOperand == "" &&
    displayWindow.textContent !== "You can't divide by zero!"
  )
    currentOperand = displayWindow.textContent;
  if (currentOperand != "") previousOperand = currentOperand;
  currentOperand = "";
  operator = "*";
});

divKey.addEventListener("click", () => {
  if (operator != "")
    operate(operator, Number(previousOperand), Number(currentOperand));
  if (
    displayWindow.textContent != "" &&
    currentOperand == "" &&
    displayWindow.textContent !== "You can't divide by zero!"
  )
    currentOperand = displayWindow.textContent;
  if (currentOperand != "") previousOperand = currentOperand;
  currentOperand = "";
  operator = "/";
});

evaluateKey.addEventListener("click", () => {
  if (currentOperand == "" || operator == "") return;
  if (operator != "")
    operate(operator, Number(previousOperand), Number(currentOperand));
  previousOperand = currentOperand;
  currentOperand = "";
});
