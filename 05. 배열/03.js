// 문제 03 두 개 뽑아서 더하기
// 저자 권장 시간: 30분, 권장 시간 복잡도: O(N^2log(N^2)), 출제: 월간 코드 챌린지(프로그래머스)
// 문제 URL: https://programmers.co.kr/learn/courses/30/lessons/68644
// https://github.com/kciter/coding-interview-js/blob/main/solution/03.js

// 정수 배열 numbers가 주어집니다.
// numbers에서 서로 다른 인덱스에 있는 2개의 수를 뽑아 더해 만들 수 있는 모든 수를 배열에 오름차순으로 담아 반환하는 solution() 함수를 완성하세요.

// 제약 조건
// - numbers의 길이는 2 이상 100 이하입니다.
// - numbers의 모든 수는 0 이상 100 이하입니다.

function solution(numbers) {
  const max = numbers.length;
  return [
    ...new Set(
      numbers.reduce((acc, el, idx) => {
        for (let i = idx + 1; i < max; i++) {
          const num = el + numbers[i];
          acc.push(num);
        }
        return acc;
      }, [])
    ),
  ].sort((a, b) => a - b);
}

// 정답
function solution2(numbers) {
  const ret = []; // ➊ 빈 배열 생성
  // ➋ 두 수를 선택하는 모든 경우의 수를 반복문으로 구함
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      // ➌ 두 수를 더한 결과를 새로운 배열에 추가
      ret.push(numbers[i] + numbers[j]);
    }
  }
  // ➍ 중복된 값을 제거하고, 오름차순으로 정렬 후 반환
  return [...new Set(ret)].sort((a, b) => a - b);
}

// TEST 코드입니다.
console.log(solution([2, 1, 3, 4, 1])); // 반환값 : [2, 3, 4, 5, 6, 7]
console.log(solution([5, 0, 2, 7])); // 반환값 : [2, 5, 7, 9, 12]
