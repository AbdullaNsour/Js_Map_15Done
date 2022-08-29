//ex1
let myarr = [2, 5, 100];

function addition(ele) {
  return ele + ele;
}
let add = myarr.map(addition);
console.log(`ex1 ------------------------------`);
console.log(add);

//ex2

function Strings(ele) {
  return `${ele}`;
}
let str = myarr.map(Strings);
console.log(`ex2 ------------------------------`);
console.log(str);

//ex3
let capitalizeNames = ["john", "JACOB", "jinGleHeimer", "schmidt"];

const uppercased = capitalizeNames.map((name) => name.charAt().toUpperCase());

function capitalizeNamess(arr) {
  let map3 = arr.map((word) => {
    word2 = word.toLowerCase();
    return word2.charAt(0).toUpperCase() + word2.slice(1);
  });
  return map3;
}
console.log(`ex3 ------------------------------`);
console.log(capitalizeNamess(["john", "JACOB", "jinGleHeimer", "schmidt"]));
console.log(uppercased);

//ex4
function namesOnly(arr) {
  let onlyNameArr = arr.map((x) => x.name);
  return onlyNameArr;
}
console.log(`ex4 ------------------------------`);
console.log(
  namesOnly([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 },
  ])
);

//ex5

// let makeStr = ["Angelina Jolie","Eric Jones","Paris Hilton","Kayne West","Bob Ziroll"];

// console.log(makeStrings([
//     {name: "Angelina Jolie",age: 80,},
//     {name: "Eric Jones", age: 2,},
//     {name: "Paris Hilton", age: 5,},
//     {name: "Kayne West", age: 16,},
//     {name: "Bob Ziroll", age: 100,},
//   ])
// );

//ex 6

function readyToPutInTheDOM(arr) {
  arr.map((c) => {
    document.write("<h1>" + c.name + "</h1>");
    document.write("<h2>" + c.age + "</h2>");
  });

  arr.forEach((c) => {
    document.write("<h1>" + c.name + "</h1>");
    document.write("<h2>" + c.age + "</h2>");
  });
}
console.log(`ex 6 ---------------------------------readyToPutInTheDOM `);
console.log(
  readyToPutInTheDOM([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 },
  ])
);

//ex 7
function doubleValues(arr) {
  return arr.map(function (value, index, array) {
    return value * 2;
  });
}
console.log(`ex 7 ---------------------------------doubleValues `);
console.log(doubleValues([1, 4, 7, 8]));

//ex 8
function valTimesIndex(arr) {
  return arr.map(function (value, index, array) {
    return value * index;
  });
}
console.log(`ex 8 ---------------------------------valTimesIndex `);
console.log(valTimesIndex([1, 2, 3]));

//ex 9
function extractFullName(arr) {
  return arr.map(function (value, index, array) {
    return value.first + " " + value.last;
  });
}

console.log(`ex 9 ---------------------------------extractFullName `);
console.log(
  extractFullName([
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia" },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele" },
  ])
);

//ex 10
function extractKey(arr, key) {
  return arr.map(function (value, index, array) {
    return value[key];
  });
}
console.log(`ex 10 ---------------------------------extractKey `);
console.log(
  extractKey(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "name"
  )
);

//ex 11
function evenOnly(arr) {
  var newArr = [];
  var reducer = (acc) => {
    if (acc % 2 == 0) {
      return acc;
    }
  };
  return arr.filter(reducer);
}
console.log(`ex 11 ---------------------------------evenOnly `);
console.log(evenOnly([1, 8, 6, 4]));

//ex 12
function multiFour(arr) {
  var reducer = (acc) => {
    if (acc % 4 == 0) {
      return acc;
    }
  };
  return arr.filter(reducer);
}
console.log(`ex 12 ---------------------------------multiFour `);
console.log(multiFour([1, 8, 6, 4]));

//ex 13
function containChar(arr, str) {
  return arr.filter((a) => {
    if (a[0] == str) {
      return a;
    }
  });
}
console.log(`ex 13 ---------------------------------containChar `);
console.log(containChar(["hello", "world"], "w"));

//ex 14
function evenIndexOddLength(arr) {
  return arr.filter((a, i) => {
    if (a.length % 2 == 1 && i % 2 == 0) {
      return a;
    }
  });
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];

console.log(`ex 14 ---------------------------------evenIndexOddLength `);
console.log(evenIndexOddLength(strings));

//ex 15
function olderThan(arr, age) {
  return arr.filter((a) => {
    if (a.age > age) {
      return a;
    }
  });
}
console.log(`ex 15 ---------------------------------olderThan `);
console.log(olderThan(persons, 56));

//ex 16
function shorterThan(arr, num) {
  return arr.filter((a) => {
    if (a.length < num) {
      return a;
    }
  });
}
console.log(`ex 16 ---------------------------------shorterThan `);
console.log(shorterThan(strings, 5));
