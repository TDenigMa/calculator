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
    return "You can't divide by zero!";
  } else {
    return a / b;
  }
}

function operate(operator, a, b) {
  return operator(a, b);
}
