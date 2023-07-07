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

// const solution = (date, carNumberArray) => {
//   let answer;

//   let violatingVehicle = [];

//   for (carNumber of carNumberArray) {
//     if (carNumber % 10 === date) {
//       violatingVehicle.push(carNumber);
//     }
//   }

//   answer = violatingVehicle.length;

//   return answer;
// };

// console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));

// const solution =  () => {
//     let answer;

//     return answer
// }

// console.log(solution())

// 8. 일곱 난쟁이

// 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
// 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이" 의 주인공이라고 주장했다. 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.
// 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.

// 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.

// 메모 : 해당문제에서 원본배열에 요소를 삭제할때는 뒤쪽 index요소를 우선적으로 삭제해야한다 앞쪽 index를 우선적으로 삭제하면 뒤에 index가 영향을 받아 원하는 값을 정상적으로 출력하는데 어려움이있음
// const solution = (arr) => {
//   let answer;

//   const sum = arr.reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (sum - (arr[i] + arr[j]) === 100) {
//         arr.splice(j, 1);
//         arr.splice(i, 1);
//       }
//     }
//   }

//   answer = arr;

//   return answer;
// };

// console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));

//9. A를 #으로 바꾸기

// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.

// const solution = (word) => {
//   let answer;

//   const regex = /A/g;

//   answer = word.replace(regex, "#");

//   return answer;
// };

// console.log(solution("BANANA"));

// 10. 문자 찾기

// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요. 문자열의 길이는 100을 넘지 않습니다.

// const solution = (word, letter) => {
//   let answer;

//   const regex = new RegExp(letter, "g");

//   answer = word.match(regex).length;

//   return answer;
// };

// console.log(solution("COMPUTERPROGRAMMING", "R"));

// 11.대문자 찾기

// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요.

// const solution = (word) => {
//   let answer;

//   const regex = /[A-Z]/g;

//   answer = word.match(regex).length;

//   return answer;
// };

// console.log(solution("KoreaTimeGood"));

// 12. 대문자로 통일
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력 하는 프로그램을 작성하세요.

//메모
// 1. charCodeAt 메소드는 문자열을 유니코드로 변환시켜주고 fromCharCode 메소드는 유니코드를 문자열로 변환시켜준다
// 2. 알파벳 A의 유니코드는 65부터 Z까지 1씩 증가하고 알파벳 a의 유니코드는 97부터 z까지 1씩증가한다
// 3. 즉 알파벳 대문자와 소문자에 유니코드 차이는 32이다

// const solution = (word) => {
//   let answer = "";

//   for (let letter of word) {
//     const letterUnicode = letter.charCodeAt();

//     65 <= letterUnicode || letterUnicode <= 90
//       ? (answer += letter.toUpperCase())
//       : (answer += letter);
//   }

//   return answer;
// };

// console.log(solution("ItisTimeToStudy"));

// 13. 대소문자 변환하기

// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.

//메모
// 1.아래와같은 방법으로 풀면 12번 문제도 더 쉽게 풀 수 있음
// 2. replace 메소드에 2번인자가 callBack을 받으면 1번인자에 patter에 의해 찾아진 문자열이 콜백에 인자로 들어가게됨

// const solution = (word) => {
//   let answer;

//   const regex = /[a-zA-Z]/g;

//   answer = word.replace(regex, (letter) => {
//     if (letter.toUpperCase() === letter) {
//       return letter.toLowerCase();
//     } else {
//       return letter.toUpperCase();
//     }
//   });

//   return answer;
// };

// console.log(solution("StuDY"));

// 14. 가장 긴 문자열 찾기

//N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

// const solution = (wordArr) => {
//   let answer;

//   const newWordArr = wordArr.map((word) => word.length);

//   answer = wordArr.find((word) => word.length === Math.max(...newWordArr));

//   return answer;
// };

// console.log(solution(["teacher", "time", "student", "beautiful", "good"]));

//15.가운데 문자 출력
// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

// const solution = (word) => {
//   let answer;

//   const remainder = word.length % 2;
//   const midLetterIndex = Math.floor(word.length / 2);

//   answer =
//     remainder === 1
//       ? word[midLetterIndex]
//       : word[midLetterIndex - 1] + word[midLetterIndex];

//   return answer;
// };

// console.log(solution("study"));
// console.log(solution("good"));

//16. 중복문자제거

//소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요. 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

// const solution = (word) => {
//   let answer = "";

//   const set = new Set();

//   for (let i = 0; i < word.length; i++) {
//     const letter = word[i];
//     if (!set.has(letter)) {
//       set.add(letter);

//       answer += letter;
//     }
//   }

//   return answer;
// };

// console.log(solution("ksekkset"));

// 17.중복단어제거

//N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요. 출력하는 문자열은 원래의 입력순서를 유지합니다.

// const solution = (wordArr) => {
//   let answer;
//   const set = new Set();

//   for (word of wordArr) {
//     if (!set.has(word)) {
//       set.add(word);
//     }
//   }

//   answer = [...set];

//   return answer;
// };

// console.log(solution(["good", "time", "good", "time", "student"]));
