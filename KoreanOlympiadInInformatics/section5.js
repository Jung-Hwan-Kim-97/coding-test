// 1.두 배열 합치기
// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.

// ▣ 입력예제 1
// 3
// 1 3 5
// 5
// 2 3 6 7 9
// ▣ 출력예제 1
// 1 2 3 3 5 6 7 9

// const solution = (arr1, arr2) => {
//   let answer;

//   const newArray = [...arr1, ...arr2];

//   answer = newArray.sort((a, b) => a - b);

//   return answer;
// };
// const arr1 = [1, 3, 5];
// const arr2 = [2, 3, 6, 7, 9];

// console.log(solution(arr1, arr2));

// 2.공통원소 구하기
// A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하세요.

// ▣ 입력예제 1

// 1 3 9 5 2

// 3 2 5 7 8

// ▣ 출력예제 1
// 2 3 5

const solution = (arr1, arr2) => {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) answer.push(arr1[i]);
    }
  }
  answer = answer.sort((a, b) => a - b);

  return answer;
};
const arr1 = [1, 3, 9, 5, 2];
const arr2 = [3, 2, 5, 7, 8];

console.log(solution(arr1, arr2));
