// 1. 세수중 최솟 값

// 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.(정렬을 사용하면 안됩니다)

// const solution =  (a,b,c) => {
//     let answer

//     answer = Math.min(a,b,c)

//     return answer
// }

// console.log(solution(5,100,50000))

//2.삼각형 판별하기

//길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

//메모 : 삼각형이 성립되기위한 조건은 2변의 길이의 합이 가장큰 변의 길이보다 커야함

// const solution =  (a,b,c) => {
//     let answer

//     const sum = a+b+c

//     const maxValue = Math.max(a,b,c)

//     answer = sum - maxValue > maxValue ? 'Yes' : 'No'

//     return answer
// }

// console.log(solution(4,5,6))

// 3. 연필 개수

// 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

// const solution =  (students) => {
//     let answer

//     const dozen = 12

//     answer = students % dozen === 0 ? students / dozen : Math.floor(students / dozen + 1)

//     return answer
// }

// console.log(solution(100))

// 4. 1부터 N까지 합 출력하기

//자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요

// const solution =  (number) => {
//     let answer = 0

//      for(let i = 0; i <= number; i++){
//          answer += i
//     }

//     return answer
// }

// console.log(solution(10))

// 5. 배열안에 최솟값 구하기

// 배열안에 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요
// const solution =  (arr) => {
//     let answer;

//     answer = Math.min(...arr)

//     return answer
// }

// console.log(solution([5 ,3, 7, 11, 2, 15, 17]))

// 6. 홀수

// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.

// 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53, 85이므로
// 그 합은 77 + 41 + 53 + 85 = 256이 되고, 41 < 53 < 77 < 85 이므로 홀수들 중 최소값은 41이 된다.

// const solution = (arr) => {
//   let answer;

//   const newArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//       newArray.push(arr[i]);
//     }
//   }

//   const oddSum = newArray.reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);

//   const minValue = Math.min(...newArray);

//   answer = [oddSum, minValue];

//   return answer;
// };

// console.log(solution([12, 77, 38, 41, 53, 92, 85]));

// 7. 자동차 10부제

// 서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다. 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것이다.
// 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하지 못한다. 또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한다.
// 여러분들은 일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고한다. 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.

// 날짜의 일의 자리 숫자가 주어지고 두 번째 줄에는 7대의 자동차 번호의 끝 두 자 리 숫자가 주어진다.

const solution = (date, carNumberArray) => {
  let answer;

  let violatingVehicle = [];

  for (carNumber of carNumberArray) {
    if (carNumber % 10 === date) {
      violatingVehicle.push(carNumber);
    }
  }

  answer = violatingVehicle.length;

  return answer;
};

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));

// const solution =  () => {
//     let answer;

//     return answer
// }

// console.log(solution())
