// 문제 04 모의고사
// 저자 권장 시간: 30분, 권장 시간 복잡도: O(N), 출제: 완전 탐색
// 문제 URL: https://programmers.co.kr/learn/courses/30/lessons/42840
// https://github.com/kciter/coding-interview-js/blob/main/solution/04.js

// 수포자는 수학을 포기한 사람을 줄인 표현입니다.
// 수포자 삼인방은 모의고사에 수학 문제를 전부 직으려 합니다.
// 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
// 1번 수포자가 찍는 방식: 1,2,3,4,5,1,2,3,4,5,...
// 2번 수포자가 찍는 방식: 2,1,2,3,2,4,2,5,2,1,2,3,2,4,2,5,...
// 3번 수포자가 찍는 방식: 3,3,1,1,2,2,4,4,5,5,3,3,1,1,2,2,4,4,5,5,...
// 1번 문제부터 마지막 문제까지의 정답이 순서대로 저장된 배열 answers가 주어졌을 때,
// 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 반환하도록 solution() 함수를 작성하세요.

// 제약 조건
// 시험은 최대 10000 문제로 구성되어 있습니다.
// 문제의 정답은 1,2,3,4,5 중 하나입니다.
// 가장 높은 점수를 ㅂ받은 사람이 여럿이라면 반환하는 값을 오름차순으로 정렬하세요.

function solution(answers) {
  let num1Count = 0;
  let num2Count = 0;
  let num3Count = 0;

  const answersLength = answers.length;
  const num1 = [1, 2, 3, 4, 5];
  const num2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const handleNumArr = (num) => {
    if (answersLength <= num.length) {
      return num.splice(0, answersLength);
    }
    const quo = Math.floor(answersLength / num.length);
    const remain = answersLength % num.length;

    let arr = [...num];
    for (let i = 0; i < quo; i++) {
      arr = arr.concat(num);
    }
    return arr.concat(num.splice(0, remain));
  };

  const num1Arr = handleNumArr(num1);
  const num2Arr = handleNumArr(num2);
  const num3Arr = handleNumArr(num3);

  answers.map((e, idx) => {
    if (num1Arr[idx] === e) {
      num1Count++;
    }
    if (num2Arr[idx] === e) {
      num2Count++;
    }
    if (num3Arr[idx] === e) {
      num3Count++;
    }
  });

  const counts = [num1Count, num2Count, num3Count];
  const countsSet = [...new Set(counts)];

  if (countsSet.length === 1) return [1, 2, 3];
  if (countsSet.length === 2) {
    const max = countsSet.sort((a, b) => b - a)[0];
    const answer = counts
      .reduce((acc, el, idx) => {
        if (el === max) {
          acc.push(idx + 1);
          return acc;
        }
        return acc;
      }, [])
      .sort((a, b) => a - b);

    return answer;
  }
  const max = counts.sort((a, b) => b - a)[0];
  return max === num1Count ? [1] : max === num2Count ? [2] : [3];
}

// 정답
function solution2(answers) {
  // ➊ 수포자들의 패턴
  const patterns = [
    [1, 2, 3, 4, 5], // 1번 수포자의 찍기 패턴
    [2, 1, 2, 3, 2, 4, 2, 5], // 2번 수포자의 찍기 패턴
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 3번 수포자의 찍기 패턴
  ];

  // ➋ 수포자들의 점수를 저장할 배열
  const scores = [0, 0, 0];

  // ➌ 각 수포자의 패턴과 정답이 얼마나 일치하는지 확인
  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % pattern.length]) {
        scores[j] += 1;
      }
    }
  }

  // ➍ 가장 높은 점수 저장
  const maxScore = Math.max(...scores);

  // ➎ 가장 높은 점수를 받은 수포자들의 번호를 찾아서 배열에 담음
  const highestScores = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      highestScores.push(i + 1);
    }
  }

  return highestScores;
}

// handleNumArr로 answers의 길이만큼 패턴 배열을 만드는 것보다 나머지 연산자르 활용할 수 있음
