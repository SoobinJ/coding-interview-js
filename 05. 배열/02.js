// 문제 02 배열 제어하기
// 저자 권장 시간: 10분, 권장 시간 복잡도: O(NlogN), 출제: 저자 출제
// https://github.com/kciter/coding-interview-js/blob/main/solution/02.js

// 제약 조건
// - 배열의 길이는 2 이상 1000 이하입니다.
// - 각 배열의 데이터 값은 -10000 이상 10000 이하입니다.

function solution(arr) {
  return [...new Set(arr)].sort((a, b) => b - a);
}

// 정답
function solution2(arr) {
  const uniqueArr = [...new Set(arr)]; // ➊ 중복값 제거
  uniqueArr.sort((a, b) => b - a); // ➋ 내림차순 정렬
  return uniqueArr;
}

// TEST 코드
console.log(solution([4, 2, 2, 1, 3, 4])); // 반환값 : [4, 3, 2, 1]
console.log(solution([2, 1, 1, 3, 2, 5, 4])); // 반환값 : [5, 4, 3, 2, 1]
