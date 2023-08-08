// 1. 올바른 괄호
// 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.

// (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.

// ▣ 입력설명
// 첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다.

// ▣ 출력설명
// 첫 번째 줄에 YES, NO를 출력한다.

// ▣ 입력예제 1
// (()(()))(()

// ▣ 출력예제 1
// NO

// const solution = (str) => {
//   let answer;

//   const stackArr = [];

//   for (x of str) {
//     if (x === "(") {
//       stackArr.push(x);
//     } else if (x === ")" && stackArr.length === 0) {
//       return "NO";
//     } else {
//       stackArr.pop();
//     }
//   }

//   answer = stackArr.length === 0 ? "YES" : "NO";

//   return answer;
// };
// const inputValue = console.log(solution("(()(()))(()"));

// const solution = (str) => {
//   let answer;

//   const stackArr = [];

//   for (let i = 0; i < str.length; i++) {
//     stackArr.push(str[i]);

//     if (str[i] === ")") {
//       const stackIndex = stackArr.lastIndexOf("(");

//       stackArr.splice(stackIndex, i + 1);
//     }
//   }

//   answer = stackArr.join("");

//   return answer;
// };

// console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));

//3.크레인 인형뽑기(카카오 기출)

// 게임개발자인 죠르디는 크레인 인형뽑기 기계를 모바일 게임으로 만들려고 합니다. 죠르디는 게임의 재미를 높이기 위해 화면 구성과 규칙을 다음과 같이 게임 로직에 반영하려고 합니다.
// 게임 화면은 1 x 1 크기의 칸들로 이루어진 N x N 크기의 정사각 격자이며 위쪽에는 크레인이 있고 오른쪽에는 바구니가 있습니다. (위 그림은 5 x 5 크기의 예시입니다).
// 각 격자 칸에는 다양한 인형이 들어 있으며 인형이 없는 칸은 빈칸입니다. 모든 인형은 1 x 1 크기의 격자한 칸을 차지하며 격자의 가장 아래 칸부터 차곡차곡 쌓여 있습니다.
// 게임 사용자는 크레인을좌우로 움직여서 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있습니다. 집어 올린 인형은 바구니에 쌓이게 되는 데, 이때 바구니의 가장 아래 칸부터 인형이 순서대로 쌓이게 됩니다.

// 다음 그림은 [1번, 5번, 3번] 위치에서 순서대로 인형을 집어 올려 바구니에 담은 모습입니다.

// 만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구니에서 사라지게 됩니다. 위 상태에서 이어서 [5번] 위치에서 인형을 집어 바구니에 쌓으면같은 모양 인형 두 개가 없어집니다.
// 크레인 작동 시 인형이 집어지지 않는 경우는 없으나 만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않습니다. 또한 바구니는 모든 인형이 들어갈 수 있을만큼 충분히 크다고 가정합니다.

// 게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 크레인을 모두 작동시킨 후 터트려져 사라진
// 인형의 개수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// board 배열은 2차원 배열로 크기는 5 x 5 이상 30 x 30 이하입니다.

// board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.0은 빈 칸을 나타냅니다. 1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타냅니다.

// moves 배열의 크기는 1 이상 1,000 이하입니다. moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다.

// ▣ 입력예제 1
// [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]] //board 배열
// [1,5,3,5,1,2,1,4] //moves 배열
// ▣ 출력예제 1
// 4

// const solution = (board, move) => {
//   let answer = 0;

//   const stackArr = [];

//   for (let i = 0; i < move.length; i++) {
//     for (let j = 0; j < board.length; j++) {
//       const target = board[j][move[i] - 1];
//       if (target !== 0) {
//         let lastIndex = stackArr[stackArr.length - 1];

//         if (target === lastIndex) {
//           stackArr.pop();
//           answer += 2;
//         } else {
//           stackArr.push(target);
//           board[j][move[i] - 1] = 0;
//         }

//         break;
//       }
//     }
//   }

//   return answer;
// };
// const board = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 3],
//   [0, 2, 5, 0, 1],
//   [4, 2, 4, 4, 2],
//   [3, 5, 1, 3, 1],
// ];

// const move = [1, 5, 3, 5, 1, 2, 1, 4];

// console.log(solution(board, move));

//4. 후위식 연산(postfix)

// 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.

// 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

// ▣ 입력설명
// 첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
// 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

// ▣ 출력설명
// 연산한 결과를 출력합니다.

// ▣ 입력예제 1
// 352+*9-

// ▣ 출력예제 1
// 12

// const solution = (str) => {
//   let answer = 0;

//   const stackArr = [];

//   for (let x of str) {
//     if (!isNaN(x)) {
//       stackArr.push(parseInt(x));
//     } else {
//       let fisrtDelete = stackArr.pop();
//       let lastDelete = stackArr.pop();

//       if (x === "+") stackArr.push(lastDelete + fisrtDelete);
//       else if (x === "-") stackArr.push(lastDelete - fisrtDelete);
//       else if (x === "*") stackArr.push(lastDelete * fisrtDelete);
//       else stackArr.push(lastDelete / fisrtDelete);
//     }
//   }
//   answer = stackArr[0];

//   return answer;
// };

// console.log(solution("352+*9-"));

//6. 공주 구하기

// 정보 왕국의 이웃 나라 외동딸 공주가 숲속의 괴물에게 잡혀갔습니다.정보 왕국에는 왕자가 N명이 있는데 서로 공주를 구하러 가겠다고 합니다. 정보왕국의 왕은다음과 같은 방법으로 공주를 구하러 갈 왕자를 결정하기로 했습니다.
// 왕은 왕자들을 나이 순으로 1번부터 N번까지 차례로 번호를 매긴다. 그리고 1번 왕자부터 N번 왕자까지 순서대로 시계 방향으로 돌아가며 동그랗게 앉게 한다.

// 그리고 1번 왕자부터 시계방향으로 돌아가며 1부터 시작하여 번호를 외치게 한다. 한 왕자가 K(특정숫자)를 외치면 그왕자는 공주를 구하러 가는데서 제외되고 원 밖으로 나오게 된다. 그리고 다음 왕자부터 다시1부터 시작하여 번호를 외친다.이렇게 해서 마지막까지 남은 왕자가 공주를 구하러 갈 수 있다.

// 예를 들어 총 8명의 왕자가 있고, 3을 외친 왕자가 제외된다고 하자. 처음에는 3번 왕자가 3을 외쳐 제외된다. 이어 6, 1, 5, 2, 8, 4번 왕자가 차례대로 제외되고 마지막까지 남게 된 7번 왕자에게 공주를 구하러갑니다. N과 K가 주어질 때 공주를 구하러 갈 왕자의 번호를 출력하는 프로그램을 작성하시오.

// ▣ 입력설명
// 첫 줄에 자연수 N(5<=N<=1,000)과 K(2<=K<=9)가 주어진다.

// ▣ 출력설명
// 첫 줄에 마지막 남은 왕자의 번호를 출력합니다.

// ▣ 입력예제 1
// 8 3

// ▣ 출력예제 1
// 7

// const solution = (n, k) => {
//   let answer;

//   const queueArr = [];
//   let count = 1;

//   for (let i = 1; i <= n; i++) {
//     queueArr.push(i);
//   }

//   while (queueArr.length !== 1) {
//     if (count === k) {
//       queueArr.shift();
//       count = 1;
//     } else {
//       let firstIndex = queueArr.shift();
//       queueArr.push(firstIndex);

//       count++;
//     }
//   }

//   answer = queueArr[0];

//   return answer;
// };

// console.log(solution(8, 3));

// 7. 교육과정 설계

// 현수는 1년 과정의 수업계획을 짜야 합니다.수업중에는 필수과목이 있습니다. 이 필수과목은 반드시 이수해야 하며, 그 순서도 정해져 있습니다.
// 만약 총 과목이 A, B, C, D, E, F, G가 있고, 여기서 필수과목이 CBA로 주어지면 필수과목은C, B, A과목이며 이 순서대로 꼭 수업계획을 짜야 합니다.

// 여기서 순서란 B과목은 C과목을 이수한 후에 들어야 하고, A과목은 C와 B를 이수한 후에 들어야 한다는 것입니다.

// 현수가 C, B, D, A, G, E로 수업계획을 짜면 제대로 된 설계이지만 C, G, E, A, D, B 순서로 짰다면 잘 못 설계된 수업계획이 됩니다.

// 수업계획은 그 순서대로 앞에 수업이 이수되면 다음 수업을 시작하다는 것으로 해석합니다.수업계획서상의 각 과목은 무조건 이수된다고 가정합니다.

// 필수과목순서가 주어지면 현수가 짠 N개의 수업설계가 잘된 것이면 “YES", 잘못된 것이면”NO“를 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 줄에 한 줄에 필수과목의 순서가 주어집니다. 모든 과목은 영문 대문자입니다.
// 두 번 째 줄부터 현수가 짠 수업설계가 주어집니다.(수업설계의 길이는 30이하이다)

// ▣ 출력설명
// 수업설계가 잘된 것이면 “YES", 잘못된 것이면 ”NO“를 출력합니다.

// ▣ 입력예제 1
// CBA
// CBDAGE

// ▣ 출력예제 1
// YES

// const solution = (n, m) => {
//   let answer = "YES";
//   const queueArr = m.split("");

//   for (x of n) {
//     let isInclude = queueArr.includes(x);

//     if (isInclude) {
//       if (queueArr[0] === x) {
//         queueArr.shift();
//       } else {
//         return "NO";
//       }
//     }
//   }

//   return answer;
// };

// console.log(solution("CBDAGE", "CBA"));
