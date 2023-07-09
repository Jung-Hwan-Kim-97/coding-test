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
