// 문제 01 배열 정렬하기
// 저자 권장 시간: 10분, 권장 시간 복잡도: O(NlogN), 출제: 저자 출제
// https://github.com/kciter/coding-interview-js/blob/main/solution/01.js

// 제약 조건
// - 0 정수 배열의 길이는 2이상 10^5 이하 입니다.
// - 정수 배열의 각 데이터 값은 -100,000 이상 100,000 이하 입니다.

function solution(arr) {
  return arr.sort();
}

// 정답
function solution2(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}

console.log(solution([1, -5, 2, 4, 3])); // [-5, 1, 2, 3, 4]
console.log(solution([2, 1, 1, 3, 2, 5, 4])); // [1, 1, 2, 2, 3, 4, 5]
console.log(solution([1, 6, 7])); // [1, 6, 7]
