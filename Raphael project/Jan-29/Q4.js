arrayOfMultiples = (number, length) => {
  const array = [];
  for (let i = 1; i < length + 1; i++) {
    array.push(number * i);
  }
  return array;
};

console.log(arrayOfMultiples(17, 6));
