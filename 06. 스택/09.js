// 문제 09 10진수를 2진수로 변환하기
// 저자 권장 시간: 30분, 권장 시간 복잡도: O(logN), 출제: 저자 출제
// https://github.com/kciter/coding-interview-js/blob/main/solution/09.js

// 10진수를 입력받아 2진수로 변환해 반환하는 solution() 함수를 구현하세요.

// 제약 조건
// decimal은 1 이상 10억 미만의 자연수

function solution(decimal) {
  let q = decimal;
  let answer = [];

  while (q !== 1) {
    answer.push(q % 2);
    q = Math.floor(q / 2);
  }
  answer.push(q);
  return Number(answer.reverse().join(""));
}

// 정답
function solution2(decimal) {
  const stack = [];

  while (decimal > 0) {
    const remainder = decimal % 2;
    stack.push(remainder);
    decimal = Math.floor(decimal / 2);
  }

  let binary = "";
  while (stack.length > 0) {
    binary += stack.pop();
  }

  return binary;
}

// TEST 코드 입니다.
console.log(solution(10)); // 반환값 :  1010
console.log(solution(27)); // 반환값 :  11011
console.log(solution(12345)); // 반환값 : 11000000111001
