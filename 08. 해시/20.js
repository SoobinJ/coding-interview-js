// 문제 20 완주하지 못한 선수
// 저자 권장 시간: 60분, 권장 시간 복잡도: O(N), 출제: 해시
// 문제 URL: https://school.programmers.co.kr/learn/courses/30/lessons/42576
// https://github.com/kciter/coding-interview-js/blob/main/solution/20.js

// 문제풀이 참고
function solution(participant, completion) {
  const obj = {};

  for (const p of participant) {
    if (obj[p]) {
      obj[p] += 1;
    } else {
      obj[p] = 1;
    }
  }

  for (const c of completion) {
    obj[c] -= 1;
  }

  for (const key in obj) {
    if (obj[key] > 0) return key;
  }
}
