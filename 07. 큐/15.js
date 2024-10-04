// 문제 15 요세푸스 문제
// 저자 권장 시간: 30분, 권장 시간 복잡도: O(N*K), 출제: 저자 출제
// https://github.com/kciter/coding-interview-js/blob/main/solution/15.js

// N명의 사람이 원 형태로 서 있습니다.
// 각 사람은 1부터 N까지 번호표를 갖고 있습니다.
// 그리고 임의의 숫자 K가 주어졌을 때 다음과 같이 사람을 없앱니다.
// - 1번 번호표를 가진 사람을 기준으로 K번째 사람을 없앱니다.
// - 없앤 사람 다음 사람을 기준으로 하고 다시 K번째 사람을 없앱니다.
// N과 K가 주어질 때 마지막에 살아있는 사람의 번호를 반환하는 solution() 함수를 구현해주세요.

// 제약 조건
// N과 K는 1이상 1000이하의 자연수입니다.

function solution(n, k) {
  let queue = new Array(n).fill(0).map((e, idx) => idx + 1);

  let front = 0;
  let rear = n;

  while (rear - front > 1) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue[front++]);
      rear++;
    }
    queue[front++];
  }
  return queue[front++];
}

// 정답
class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  size() {
    return this.rear - this.front;
  }

  pop() {
    return this.items[this.front++];
  }
}

function solution2(N, K) {
  const queue = new Queue();

  // ❶ 1부터 N까지의 번호를 deque에 추가
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.size() > 1) {
    // ❷ deque에 하나의 요소가 남을 때까지
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.pop()); // ❸ K번째 요소를 찾기 위해
      // 앞에서부터 제거하고 뒤에 추가
    }
    queue.pop(); // ❹ K번째 요소 제거
  }

  return queue.pop(); // ❺ 마지막으로 남은 요소 반환
}

console.log(solution(5, 2)); // 3
