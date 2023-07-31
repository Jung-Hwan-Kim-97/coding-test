// 1.회문 문자열

// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다. 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력하는 프로그램을 작성하세요.

// 단 회문을 검사할 때 대소문자를 구분하지 않습니다

// ▣ 입력예제 1
// gooG
// ▣ 출력예제 1
// YES

// const solution = (word) => {
//   let answer = word.toLowerCase();

//   const isPalindrome = answer === answer.split("").reverse().join("");

//   answer = isPalindrome ? "YES" : "NO";

//   return answer;
// };

// console.log("solution", solution("gooG"));

//2. 유효한 팰린드롬

// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력하는 프로그램을 작성하세요.

// 단 회문을 검사할 때 대소문자를 구분하지 않습니다.

// ▣ 입력예제 1
// found7, time: study; Yduts; emit, 7Dnuof
// ▣ 출력예제 1
// YES

// const solution = (str) => {
//   let answer;

//   const newStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

//   const isPalindrome =
//     newStr === newStr.split("").reverse().join("") ? "YES" : "NO";

//   answer = isPalindrome;

//   return answer;
// };

// console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));

// 3. 숫자만 추출
// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다.

// 만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205이 됩니다.추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.

// ▣ 입력예제 1
// g0en2T0s8eSoft
// ▣ 출력예제 1
// 208

// const solution = (str) => {
//   let answer;

//   const onlyNumber = str.replace(/[^0-9]/g, "");

//   answer = parseInt(onlyNumber);

//   return answer;
// };

// console.log(solution("g0en2T0s8eSoft"));

// 4. 가장 짧은 문자거리

// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.
// 문자열의 길이는 100을 넘지 않는다.
// ▣ 출력설명
// 첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

// ▣ 입력예제 1
// teachermode e
// ▣ 출력예제 1
// 1 0 1 2 1 0 1 2 2 1 0

// 어려웠음 다시한번 풀어보기

// const solution = (word, letter) => {
//   let answer = [];
//   let letterDestance = 100;

//   for (let i = 0; i < word.length; i++) {
//     if (letter === word[i]) {
//       letterDestance = 0;
//       answer.push(letterDestance);
//     } else {
//       letterDestance++;
//       answer.push(letterDestance);
//     }
//   }

//   letterDestance = 100;

//   for (let r = word.length - 1; r >= 0; r--) {
//     if (letter === word[r]) {
//       letterDestance = 0;
//       answer[r] = letterDestance;
//     } else {
//       letterDestance++;
//       answer[r] = Math.min(answer[r], letterDestance);
//     }
//   }

//   return answer;
// };

// console.log(solution("teachermode", "e"));

// 5. 문자열 압축
// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시 오. 단 반복횟수가 1인 경우 생략합니다.

// ▣ 입력설명
// 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
// ▣ 출력설명
// 첫 줄에 압축된 문자열을 출력한다.

// ▣ 입력예제 1
// KKHSSSSSSSE
// ▣ 출력예제 1
// K2HS7E

// const solution = (word) => {
//   let answer = "";
//   let count = 1;

//   for (let i = 0; i < word.length; i++) {
//     const isEqual = word[i] === word[i + 1];

//     if (isEqual) count++;
//     else {
//       answer += word[i];

//       if (count > 1) {
//         answer += count;

//         count = 1;
//       }
//     }
//   }

//   return answer;
// };
// console.log(solution("KKHSSSSSSSE"));
