function calc(num1, num2, typeCalc, add, multi, sub, div) {
  if (typeCalc === "add") {
    return add(num1, num2);
  } else if (typeCalc === "multi") {
    return multi(num1, num2);
  } else if (typeCalc === "sub") {
    return sub(num1, num2);
  } else if (typeCalc === "div") {
    return div(num1, num2);
  }
}

const add = (num1, num2) => {
  return num1 + num2;
};

const multi = (num1, num2) => {
  return num1 * num2;
};

const sub = (num1, num2) => {
  return num1 - num2;
};

const div = (num1, num2) => {
  return num1 / num2;
};

console.log(calc(2, 2, "multi", add, multi, sub, div));
