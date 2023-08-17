//길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

// 삼각형이 성립되기위한 조건은 2변의 길이의 합이 가장큰 변의 길이보다 커야함

// ▣ 입력설명
// 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.

// ▣ 출력설명
// 첫 번째 줄에 “YES", "NO"를 출력한다.

// ▣ 입력예제 1
// 6 7 11
// ▣ 출력예제 1
// YES
// ▣ 입력예제 1
// 13 33 17
// ▣ 출력예제 1
// NO

const solution = (a, b, c) => {
  let answer;

  const sum = a + b + c;

  const maxValue = Math.max(a, b, c);

  answer = sum - maxValue > maxValue ? "Yes" : "No";

  return answer;
};

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
