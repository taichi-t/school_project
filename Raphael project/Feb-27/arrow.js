calc = (num1, num2, typeCalc) => {
  if (typeCalc === "add") {
    return num1 + num2;
  } else if (typeCalc === "multi") {
    return num1 * num2;
  } else if (typeCalc === "sub") {
    return num1 - num2;
  } else if (typeCalc === "div") {
    return num1 / num2;
  }
};
