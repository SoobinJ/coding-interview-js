// 문제 10 괄호 회전하기
// 저자 권장 시간: 30분, 권장 시간 복잡도: O(N^2), 출제: 월간 코드 챌린지
// 문제 URL: https://programmers.co.kr/learn/courses/30/lessons/76502
// https://github.com/kciter/coding-interview-js/blob/main/solution/10.js

function solution(s) {
  var answer = 0;
  let str = [...s];

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const first = str[0];
    str = i === 0 ? str : [...str].splice(1).concat(first);
    const flg = str.map((e) => {
      if (e === "(" || e === "{" || e === "[") {
        stack.push(e);
        return;
      }
      if (e === ")" || e === "}" || e === "]") {
        if (stack.length === 0) return false;
        if (
          (e === ")" && stack.at(-1) === "(") ||
          (e === "}" && stack.at(-1) === "{") ||
          (e === "]" && stack.at(-1) === "[")
        ) {
          stack.pop();
          return;
        }
      }
    });

    if (stack.length === 0 && !flg.includes(false)) answer++;
    stack = [];
  }
  return answer;
}

// 정답
function solution2(s) {
  const n = s.length;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];

    let isCorrect = true;
    for (let j = 0; j < n; j++) {
      // ➊ 괄호 문자열을 회전시키면서 참조
      const c = s[(i + j) % n];

      if (c === "[" || c === "(" || c === "{") {
        // ➋ 열린 괄호는 푸시
        stack.push(c);
      } else {
        if (stack.length === 0) {
          // ➌ 여는 괄호가 없는 경우
          isCorrect = false;
          break;
        }

        // ➍ 닫힌 괄호는 스택의 top과 짝이 맞는지 비교
        const top = stack[stack.length - 1];
        if (c === "]" && top === "[") {
          stack.pop();
        } else if (c === ")" && top === "(") {
          stack.pop();
        } else if (c === "}" && top === "{") {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }

    // ➎ 모든 괄호의 짝이 맞는 경우
    if (isCorrect && stack.length === 0) {
      answer += 1;
    }
  }

  return answer;
}
