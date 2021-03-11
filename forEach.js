// [  배열  ] 에서 forEach
// : 배열에서 forEach 메서드는 for문과 비슷하게 반복적인 기능을 수행한다.

const brands = ["KIA", "BMW", "AUDI"];
brands.forEach((brand) => console.log(brand));

const numbers = [22, 33, 12, 89, 74];
const oneNumber = [999];
numbers.forEach((number) => oneNumber.push(number));
console.log(oneNumber);

let sum = 0;
numbers.forEach((number) => {
  sum += number;
});
console.log(sum);

const cities = ["seoul", "incheon", "busan"];
cities.forEach((item, index, array) => {
  console.log(`${item}는 index ${index}입니다.`);
});

{/* < 배열 >
PUSH, UNSHIFT */}

// push 함수는 배열의 맨 뒤에 추가한다.
const cities = ["Daejeon"];
cities.push("Seoul", "Inchoen");
console.log(cities);

// unshift 함수는 배열의 맨 앞에 추가한다.
const fruits = ["apple"];
fruits.unshift("banana", "melon");
console.log(fruits);

//pop 함수는 배열의 맨 마지막 요소를 제거하고 마지막 전의 요소를 마지막으로 둔다.
const arr = [1, 2, 3, 4, 5];
arr.pop();
console.log(arr);

const live = ["강동", "중랑", "구로", "강남"];
for (let i = 0; i < live.length; i++) {
  if (live.length[i] === "구로") {
    console.log("구로입니다.");
  }
}



// PRACTICE////////////////////////////////////////////////////////////////////////////////////////////////
function getType(anything) {
  if (Array.isArray(anything)) {
    return "array";
  } else if (anything === null) {
    return "null";
  } else {
    return typeof anything;
  } // TODO: 여기에 코드를 작성합니다.
}
////////////////////////////////////////////////////////////////////////////////////////////////
function getFirstElement(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr === 0) {
    return undefined;
  } else {
    return arr[0];
  }
}
console.log(getFirstElement([]));
////////////////////////////////////////////////////////////////////////////////////////////////
function getLastElement(arr) {
  if (arr.length > 0) {
    return arr[arr.length - 1];
  }
  return undefined;
}
////////////////////////////////////////////////////////////////////////////////////////////////
function getNthElement(arr, index) {
  if (arr.length === 0) {
    return undefined;
  } else if (arr.length - 1 < index) {
    return "out of index range";
  } else {
    return arr[index];
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////

const test = [100, 50, 77, 44, 33];
console.log(Math.max.apply(null, test));


function getType(anything) {
  if (anything === null) {
    return "null";
  } else if (Array.isArray(anything)) {
    return "Array";
  } else {
    return typeof anything;
  }
}
console.log(getType(null));

const list = [20, 30, 40];
for (let key of list) {
  console.log(key);
}
console.log(list.indexOf(1));

const ar = [1, 2, 3, 4, 5];
ar.forEach((ele) => console.log(ele));

// 배열이 빈 배열인지 확인하는 방법
// ->  배열.length === 0

let kimcoding = "010-1234-6767";
let codingArr = kimcoding.split("-");
console.log(codingArr);

function addToFront(arr, element) {
  arr.unshift(element);
  return arr;
}
console.log(addToFront([1, 2], 3));

function getElementsUpTo(array, n) {
  return array.slice(0, n);
}
console.log(getElementsUpTo(["a", "b", "c", "d", "e"], 6));

let steve = {};
function addPropertyAndValue(steve, 'isMale', true) {
  obj[property] = value;
}
console.log(steve.isMale);

function allKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}
allKeys({ name: 1, age: 20, whe: "2222" });

function allKeys(obj) {
  for (let key = 0; key < obj.length; key++) {
    console.log(key);
  }
}
allKeys({ name: 1, age: 20, whe: "2222" });
