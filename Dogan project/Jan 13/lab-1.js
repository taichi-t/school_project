1;
var side1 = 5;
var side2 = 6;
var side3 = 7;
var s = (side1 + side2 + side3) / 2;
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
console.log(area);

2;
function sum_Of_Cubes(n) {
  var sumn = 0;

  for (var i = 1; i <= n; i++) {
    sumn += Math.pow(i, 3);
  }
  return sumn;
}

console.log(sum_Of_Cubes(3));
console.log(sum_Of_Cubes(4));

3;
function capital_letter(str) {
  str = str.split(" ");

  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  return str.join(" ");
}

console.log(capital_letter("ciccc"));

4;
const num = Math.ceil(Math.random() * 10);
console.log(num);
const gnum = prompt("Guess the number between 1 and 10 inclusive");
if (gnum == num) console.log("Matched");
else console.log("Not matched, the number was " + gnum);

5;
function array_element_replace(arr, old_value, new_value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === old_value) {
      arr[i] = new_value;
    }
  }
  return arr;
}
num = [1, 2, 3, 2, 2, 8, 1, 9];
console.log("Original Array: " + num);

6;
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
var arr2 = [];
var min = arr1[0];
var pos;
var max = arr1[0];
for (i = 0; i < arr1.length; i++) {
  if (max < arr1[i]) max = arr1[i];
}

for (var i = 0; i < arr1.length; i++) {
  for (var j = 0; j < arr1.length; j++) {
    if (arr1[j] != "x") {
      if (min > arr1[j]) {
        min = arr1[j];
        pos = j;
      }
    }
  }
  arr2[i] = min;
  arr1[pos] = "x";
  min = max;
}
console.log(arr2);

7;
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.reverse());

8;
const initialData = [
  {
    name: "Taichi Tsujioka",
    age: "16",
    orderName: "apple",
    orderPrice: "100"
  },
  {
    name: "someone1",
    age: "20",
    orderName: "banana",
    orderPrice: "150"
  },
  {
    name: "someone2",
    age: "40",
    orderName: "orange",
    orderPrice: "160"
  }
];

9;
const customers = initialData.map(customers => {
  return customers;
});

const customer = customers.map(customer => {
  return customer;
});

const price = customer.map(x => x.orderPrice);

console.log(Math.max.apply(null, price));
