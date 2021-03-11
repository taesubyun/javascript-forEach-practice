// ***** 1). 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라 *****

const isEitherEvenAndLessNum = (num) => {
  if (10 < num && num < 20) {
    return num;
  }
};
console.log(isEitherEvenAndLessNum(18));

// ***** 2). for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오. *****

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// ***** 3). for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오. *****

let outcome = "";
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    outcome += i;
  }
}
console.log(outcome);

// ***** 4). for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오. *****

for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// ***** 5). while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오. *****

let i = 0;
while (i < 10) {
  i++;
  if (i % 2 === 0) {console.log(i)};
}

// ***** 6). while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오. *****

let i = 0;
while (i < 10) {
  i++;
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// ***** 7). for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오. *****
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum);

// ***** 8). 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오. *****
let sum = 0;
for (let i = 1; i < 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    sum += i;
  }
}
console.log(sum);

// ***** 9). 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오. *****

for (let i = 0; i <= 6; i++) {
  for (let j = 0; j <= 6; j++) {
    if (i + j === 6) {
      console.log(i, j);
    }
  }
}

// ***** 10). 삼각형 출력하기 - pattern *****

for (let i = 0; i < 5; i++) {
  var triangle = "";
  for (let j = 0; j <= i; j++) {
    triangle += "*";
  }
  console.log(triangle);
}

// *****11). isEven 짝수인지 판별하는 함수 *****

const isEven = (num) => {
  if (num % 2 === 0) {
    return num + " : 는 짝수입니다.";
  } else {
    return num + " : 는 홀수입니다.";
  }
};
console.log(isEven(6));

// ***** 12). get_prefix - 문자열이 주어졌을 때, "-"를 기준으로 앞에 있는 문자열을 반환하는 함수를 구현하여야 한다. *****

const getPrefilx = (string) => {
  let firstString = string.indexOf("-");
  if (firstString !== -1) {
    string = string.slice(0, firstString);
  }
  return string;
};
console.log(getPrefilx("BTC-KRW"));

// ***** 13). calculate_total
// - 팁과 세금을 제외한 식사값이 주어졌을 때, calculate_total 함수를 작성하는 예제이다.
// Notes:
// 세금은 9.5% 팁은 15% 로 계산할 것.
// 팁을 계산할때 세금을 포함하여 계산하지 말 것. ******

const calculateTotal = (price) => {
  const calculateTax = (price) => {
    return price * 0.0095;
  };
  const calculateTip = (price) => {
    return price * 0.15;
  };
  return price + calculateTax(price) + calculateTip(price);
};
console.log(calculateTotal(100));

// ***** 14). get_find - 문자와 문자열이 주어질떄, 주어진 문자열에서 문자가 나타나는 첫 번째 위치(Index)를 반환하는 get_find 함수 *****

const getFind = (letter, string) => {
  return string.indexOf(letter);
};
console.log(getFind("ab", "abcde"));
console.log(getFind("de", "abcde"));

// ***** 5) find_longestword - // 주어진 리스트 안에 있는 단어 중 가장 긴 단어를 찾을 수 있는 함수를 완성하는 문제이다. *****

const findLongestWord = (arr) => {
  let max = arr[0];
  for (let i in arr) {
    if (max >= arr[i]) {
      max = arr[i];
    }
  }
  return max;
};

console.log(findLongestWord(["PHP00000000", "Exercise", "BackEnd"]));

--------------------------------------------------------------------------------------------------------------

