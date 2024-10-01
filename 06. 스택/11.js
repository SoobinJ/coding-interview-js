// 문제 11 짝지어 제거하기
// 저자 권장 시간: 30분, 권장 시간 복잡도: O(N), 출제: 2017 팁스타운
// 문제 URL: https://programmers.co.kr/learn/courses/30/lessons/12973
// https://github.com/kciter/coding-interview-js/blob/main/solution/11.js

function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack.at(-1) === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0 ? 1 : 0;
}

// 정답
function solution2(s) {
  const stack = []; // 스택 초기화

  for (const c of s) {
    // ➊ 스택이 비어 있지 않고, 현재 문자와 스택의 맨 위 문자가 같으면
    if (stack.length > 0 && stack[stack.length - 1] === c) {
      stack.pop(); // ➋ 스택의 맨 위 문자 제거
    } else {
      stack.push(c); // ➌ 스택에 현재 문자 추가
    }
  }

  // ➍ 스택이 비어 있으면 1, 그렇지 않으면 0 반환
  return stack.length === 0 ? 1 : 0;
}
