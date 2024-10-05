// 문제 21 할인행사
// 저자 권장 시간: 60분, 권장 시간 복잡도: O(N), 출제: 연습문제
// 문제 URL: https://school.programmers.co.kr/learn/courses/30/lessons/131127
// https://github.com/kciter/coding-interview-js/blob/main/solution/21.js

// 문제풀이 참고
function solution(want, number, discount) {
  let wantObj = {};
  for (let i = 0; i < want.length; i++) {
    wantObj[want[i]] = number[i];
  }

  let answer = 0;

  for (let i = 0; i < discount.length - 9; i++) {
    const discountObj = {};

    for (let j = i; j < i + 10; j++) {
      if (wantObj[discount[j]]) {
        discountObj[discount[j]] = (discountObj[discount[j]] || 0) + 1;
      }
    }

    const wantKeys = Object.keys(wantObj);
    const discountKeys = Object.keys(discountObj);

    if (wantKeys.length === discountKeys.length) {
      if (wantKeys.every((e) => wantObj[e] === discountObj[e])) answer += 1;
    }
  }

  return answer;
}
