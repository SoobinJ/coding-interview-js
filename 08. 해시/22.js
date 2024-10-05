// 문제 22 오픈 채팅방
// 저자 권장 시간: 60분, 권장 시간 복잡도: O(N), 출제: 2019 KAKAO BLIND RECRUITMENT
// 문제 URL: https://school.programmers.co.kr/learn/courses/30/lessons/42888
// https://github.com/kciter/coding-interview-js/blob/main/solution/22.js

function solution(record) {
  var answer = [];
  const uidObj = {};
  for (const r of record) {
    const [flag, uid, name = ""] = r.split(" ");
    if (flag === "Enter" || flag === "Change") {
      uidObj[uid] = name;
    }
  }

  for (const r of record) {
    const [flag, uid] = r.split(" ");
    if (flag === "Enter") answer.push(`${uidObj[uid]}님이 들어왔습니다.`);
    if (flag === "Leave") answer.push(`${uidObj[uid]}님이 나갔습니다.`);
  }

  return answer;
}

// 정답
function solution2(record) {
  answer = [];
  uid = {};

  for (line in record) {
    // ➊ record의 각 줄을 하나씩 처리
    cmd = record[line].split(" ");
    if (cmd[0] != "Leave") {
      // ➋ Enter 또는 Change인 경우
      uid[cmd[1]] = cmd[2];
    }
  }

  for (line in record) {
    // ➌ record의 각 줄을 하나씩 처리
    cmd = record[line].split(" ");
    // ➍ 각 상태에 맞는 메시지를 answer에 저장
    if (cmd[0] == "Enter") {
      answer.push(uid[cmd[1]] + "님이 들어왔습니다.");
    } else if (cmd[0] == "Leave") {
      answer.push(uid[cmd[1]] + "님이 나갔습니다.");
    }
  }

  return answer;
}
