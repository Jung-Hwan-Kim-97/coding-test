//1. 자릿수의 합
// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요.

// 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

// ▣ 입력설명
// 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
// 각 자연수의 크기는 10,000,000를 넘지 않는다.
// ▣ 출력설명
// 자릿수의 합이 최대인 자연수를 출력한다.
// ▣ 입력예제 1
// 7
// 128 460 603 40 521 137 123
// ▣ 출력예제 1
// 137

// const solution = (arr) => {
//   let answer;

//   const sumArray = arr.map((item) => {
//     let dividedItem = item.toString().split("");

//     const sum = dividedItem.reduce((acc, cur) => acc + parseInt(cur), 0);

//     return sum;
//   });

//   const maxValue = Math.max(...sumArray);

//   const findMaxValueIndex = sumArray.reduce((acc, cur, index) => {
//     if (maxValue === cur) {
//       acc.push(index);
//     }
//     return acc;
//   }, []);

//   const filteredArr = findMaxValueIndex.map((targetIndex) => arr[targetIndex]);

//   answer = Math.max(...filteredArr);

//   return answer;
// };
// const inputValue = [128, 460, 603, 40, 521, 137, 123];

// console.log(solution(inputValue));

// 2. 뒤집은 소수

// N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요.

// 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.

// ▣ 입력설명
// 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
// 각 자연수의 크기는 100,000를 넘지 않는다.
// ▣ 출력설명
// 첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.

// ▣ 입력예제 1

// 32 55 62 20 250 370 200 30 100
// ▣ 출력예제 1
// 23 2 73 2 3

// const solution = (arr) => {
//   let answer;

//   const getPrimeNumber = (number) => {
//     let isPrime = true;

//     if (number <= 1) isPrime = false;

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         isPrime = false;
//       }
//     }
//     return isPrime;
//   };

//   const newArr = arr.map((number) => {
//     let newNumber = 0;

//     while (number) {
//       let test = number % 10;
//       newNumber = newNumber * 10 + test;

//       number = Math.floor(number / 10);
//     }

//     return newNumber;
//   });

//   answer = newArr.filter((newNumber) => getPrimeNumber(newNumber) === true);

//   return answer;
// };

// console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));

//3 .멘토링

// 많이 어려움

// 현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니다. 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의수학공부를 도와주는 것입니다.

// 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.

// 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지
// 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 번째 줄에 반 학생 수 N(1<=N<=20)과 M(1<=M<=10)이 주어진다.
// 두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생번호로 주어진다.
// 학생번호가 제일 앞에서부터 1등, 2등, ...N등 순으로 표현된다.
// 만약 한 줄에 N=4이고, 테스트 결과가 3 4 1 2로 입력되었다면 3번 학생이 1등, 4번 학생이2등, 1번 학생이 3등, 2번 학생이 4등을 의미합니다.

// ▣ 출력설명
// 첫 번째 줄에 짝을 만들 수 있는 총 경우를 출력합니다.

// ▣ 입력예제 1
// 4(학생수) 3(시험횟수)
// 3 4 1 2
// 4 3 2 1
// 3 1 4 2

// ▣ 출력예제 1
// 3
// (3, 1), (3, 2), (4, 2)와 같이 3가지 경우의 (멘토, 멘티) 짝을 만들 수 있다.

// const solution = (grid) => {
//   let answer = 0;

//   const students = grid[0].length;
//   const examCount = grid.length;

//   for (let i = 1; i <= students; i++) {
//     for (let j = 1; j <= students; j++) {
//       let winCount = 0;

//       for (let k = 0; k < examCount; k++) {
//         let gradeOfI;
//         let gradeOfJ;
//         for (let s = 0; s < students; s++) {
//           if (grid[k][s] === i) gradeOfI = s;
//           if (grid[k][s] === j) gradeOfJ = s;
//         }
//         if (gradeOfI < gradeOfJ) winCount++;
//       }
//       if (winCount === examCount) answer++;
//     }
//   }

//   return answer;
// };

// const grid = [
//   [3, 4, 1, 2],
//   [4, 3, 2, 1],
//   [3, 1, 4, 2],
// ];

// console.log(solution(grid));

//4 졸업 선물

// 선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다. 학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라고 했습니다.

// 선생님이 가지고 있는 예산은 한정되어 있습니다.현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요.

// 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 배송비는 할인에 포함되지 않습니다.

// ▣ 입력설명
// 첫 번째 줄에 반 학생수 N(1<=N<=1000)과 예산 M(1<=M<=100,000,000)이 주어진다.
// 두 번째 줄부터 N줄에 걸쳐 각 학생들이 받고 싶은 상품의 가격과 배송비가 입력됩니다.
// 상품가격과 배송비는 각각 100,000을 넘지 않습니다. 상품가격은 짝수로만 입력됩니다.

// ▣ 출력설명
// 첫 번째 줄에 선생님이 현재 예산으로 선물할 수 있는 최대 학생수를 출력합니다.
// 선생님 최소한 1개 이상의 상품을 살 수 있는 예산을 가지고 있습니다.

// ▣ 입력예제 1
// 5 28
// 6 6
// 2 2
// 4 3
// 4 5
// 10 3

// ▣ 출력예제 1
// 4

// const solution = (money, product) => {
//   let answer = 0;

//   //낮은 가격순으로 정렬
//   product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

//   for (let i = 0; i < product.length; i++) {
//     //모든상품을 각각 할인한 경우
//     let currentMoney = money - (product[i][0] / 2 + product[i][1]);
//     let purchaseCount = 1;

//     //할인되지 않은 상품들을 낮은 가격순으로 계속 사는 경우
//     for (let j = 0; j < product.length; j++) {
//       if (i !== j && product[j][0] + product[j][1] > currentMoney) break;
//       if (i !== j && product[j][0] + product[j][1] <= currentMoney) {
//         currentMoney -= product[j][0] + product[j][1];
//         purchaseCount++;
//       }
//       answer = Math.max(answer, purchaseCount);
//     }
//   }

//   return answer;
// };

// const money = 28;
// const productPriceArr = [
//   [6, 6],
//   [2, 2],
//   [4, 3],
//   [4, 5],
//   [10, 3],
// ];

// console.log(solution(money, productPriceArr));

// 5. K번째 큰 수
// 현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다. 같은 숫자의 카드가여러장 있을 수 있습니다.
// 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려고 합니다. 3장을 뽑을 수 있는 모든 경우를 기록합니다. 기록한 값 중 K번째로 큰 수를 출력하는 프로그램을 작성하세요.

// 만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값은 22입니다.

// ▣ 입력설명
// 첫 줄에 자연수 N(3<=N<=100)과 K(1<=K<=50) 입력되고, 그 다음 줄에 N개의 카드값이 입력
// 된다.

// ▣ 출력설명
// 첫 줄에 K번째 수를 출력합니다. K번째 수는 반드시 존재합니다.

// ▣ 입력예제 1
// 10 3
// 13 15 34 23 45 65 33 11 26 42

// ▣ 출력예제 1
// 143

// const solution = (arr, selectCount) => {
//   let answer;
//   const arrLength = arr.length;
//   const set = new Set();
//   for (let i = 0; i < arrLength; i++) {
//     for (let j = i + 1; j < arrLength; j++) {
//       for (let k = j + 1; k < arrLength; k++) {
//         set.add(arr[i] + arr[j] + arr[k]);
//       }
//     }
//   }
//   answer = Array.from(set).sort((a, b) => b - a)[selectCount - 1];
//   return answer;
// };
// const selectCount = 3;
// const arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

// console.log(solution(arr, selectCount));
