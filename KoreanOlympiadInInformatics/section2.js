//1. 큰 수 출력하기

//N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.(첫 번째 수는 무조건 출력한다)

// const solution = (arr) => {
//   let answer;

//   const newArr = [];

//   arr.forEach((currentNumber, i) => {
//     if (typeof arr[i - 1] === "undefined" || currentNumber > arr[i - 1])
//       newArr.push(currentNumber);

//     return newArr;
//   });

//   answer = newArr;

//   return answer;
// };

// console.log(solution([7, 3, 9, 5, 6, 12]));

//2.보이는 학생 수 구하기

//선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에 서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그램을 작성하세요. (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)

//선생님이 볼 수 있는 최대학생수를 출력한다

// const solution = (arr) => {
//   let answer;
//   const newArr = [];

//   arr.forEach((studentHeight, index) => {
//     if (arr[index + 1] > studentHeight) {
//       newArr.push(arr[index + 1]);
//     }
//   });

//   answer = newArr.length;

//   return answer;
// };
// console.log("solution", solution([130, 135, 148, 140, 145, 150, 150, 153]));

//3.가위 바위 보

//A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다. 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.

// ▣ 입력설명
// 첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다.
// 두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다.
// 세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.

// ▣ 출력설명
// 각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.

// const solution = (gameCount, player1, player2) => {
//   let answer;

//   const result = [];
//   for (let i = 0; i < gameCount; i++) {
//     player1[i] === player2[i]
//       ? result.push("D")
//       : player1[i] - player2[i] === -2
//       ? result.push("A")
//       : player1[i] - player2[i] === 2
//       ? result.push("B")
//       : player1[i] > player2[i]
//       ? result.push("A")
//       : result.push("B");
//   }

//   answer = result;

//   return answer;
// };

// console.log("solution", solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));

//4. 점수계산
// OX 문제는 맞거나 틀린 두 경우의 답을 가지는 문제를 말한다. 여러 개의 OX 문제로 만들어진 시험에서 연속적으로 답을 맞히는 경우에는 가산점을 주기 위해서 다음과 같이 점수 계산을 하기로 하였다.
// 1번 문제가 맞는 경우에는 1점으로 계산한다. 앞의 문제에 대해서는 답을 틀리다가답이 맞는 처음 문제는 1점으로 계산한다. 또한, 연속으로 문제의 답이 맞는 경우에서 두 번째문제는 2점, 세 번째 문제는 3점, ..., K번째 문제는 K점으로 계산한다. 틀린 문제는 0점으로 계산한다.

// 시험문제의 채점 결과가 주어졌을 때, 총 점수를 계산하는 프로그램을 작성하시오.

// ▣ 입력설명
// 첫째 줄에 문제의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에는 N개 문제의 채점 결과를 나타내는 0 혹은 1이 빈 칸을 사이에 두고 주어진다. 0은 문제의 답이 틀린 경우이고, 1은 문제의답이 맞는 경우이다.

// const solution = (count, arr) => {
//   let answer = 0;
//   let consecutive = 0;

//   for (let i = 0; i < count; i++) {
//     if (arr[i] === 1) {
//       consecutive++;
//       answer += consecutive;
//     } else {
//       consecutive = 0;
//     }
//   }

//   return answer;
// };

// console.log("solution", solution(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));

// 5. 등수구하기

// N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
// ▣ 입력설명

// 첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력된다. 같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.

// ▣ 출력설명
// 입력된 순서대로 등수를 출력한다.

// const solution = (count, arr) => {
//   let answer = arr.map(() => 1);

//   for (let i = 0; i < count; i++) {
//     for (let j = 0; j < count; j++) {
//       if (arr[i] < arr[j]) answer[i]++;
//     }
//   }

//   return answer;
// };

// console.log(solution(5, [87, 89, 92, 100, 76]));

// 6. 격자판 최대합

// 5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19

// ▣ 입력설명

// 첫 줄에 자연수 N이 주어진다.(1<=N<=50) 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.

// ▣ 출력설명
// 최대합을 출력합니다.

// const solution = (n, grid) => {
//   let answer;

//   let maxValue = 0;

//   //열 최대값
//   grid.forEach((row) => {
//     const rowSum = row.reduce((acc, cur) => acc + cur, 0);

//     if (rowSum > maxValue) maxValue = rowSum;
//   });

//   //행 최대값
//   for (let i = 0; i < n; i++) {
//     let columnSum = 0;

//     for (let j = 0; j < n; j++) {
//       columnSum += grid[j][i];
//     }

//     if (columnSum > maxValue) maxValue = columnSum;
//   }

//   //첫번째 대각선 최대값

//   let diagonal1Sum = 0;

//   grid.forEach((item, i) => {
//     diagonal1Sum += item[i];

//     if (diagonal1Sum > maxValue) maxValue = diagonal1Sum;
//   });

//   //두번째 대각선 최대값

//   let diagonal2Sum = 0;

//   grid.forEach((item, i) => {
//     diagonal2Sum += item[n - i - 1];

//     if (diagonal2Sum > maxValue) maxValue = diagonal2Sum;
//   });

//   answer = maxValue;

//   return answer;
// };

// console.log(
//   solution(5, [
//     [10, 13, 10, 12, 15],
//     [12, 39, 30, 23, 11],
//     [11, 25, 50, 53, 15],
//     [19, 27, 29, 37, 27],
//     [19, 13, 30, 13, 19],
//   ])
// );

//7 봉우리
// 지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개있는 지 알아내는 프로그램을 작성하세요.

// 격자의 가장자리는 0으로 초기화 되었다고 가정한다.만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.

// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
// 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는
// 다.

// ▣ 출력설명
// 봉우리의 개수를 출력하세요.

// ▣ 입력예제
// 5
// 5 3 7 2 3
// 3 7 1 6 1
// 7 2 5 3 4
// 4 3 6 4 1
// 8 7 3 5 2
// ▣ 출력예제
// 10

// const solution = (grid, n) => {
//   let answer = 0;

//   const direction = [
//     [-1, 0], // 위쪽
//     [1, 0], // 아랫쪽
//     [0, 1], // 오른쪽
//     [0, -1], // 왼쪽
//   ];

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       let isPeak = true;

//       for (let k = 0; k < direction.length; k++) {
//         const currentItem = grid[i][j];

//         const selectedRow = i + direction[k][0];
//         const selectedColumn = j + direction[k][1];

//         if (currentItem <= grid[selectedRow][selectedColumn]) {
//           isPeak = false;
//           break;
//         }
//       }
//       if (isPeak) answer++;
//     }
//   }

//   return answer;
// };

// const grid = [
//   [0, 0, 0, 0, 0, 0],
//   [0, 5, 3, 7, 2, 3],
//   [0, 3, 7, 1, 6, 1],
//   [0, 7, 2, 5, 3, 4],
//   [0, 4, 3, 6, 4, 1],
//   [0, 8, 7, 3, 5, 2],
//   [0, 0, 0, 0, 0, 0],
// ];

// console.log(solution(grid, 5));
