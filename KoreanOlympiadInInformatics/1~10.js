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

//연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

// const solution =  (students) => {
//     let answer

//     const dozen = 12 

//     answer = students % dozen === 0 ? students / dozen : Math.floor(students / dozen + 1) 

//     return answer 
// }

// console.log(solution(100))


//4. 1부터 N까지 합 출력하기

//자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요


// const solution =  (number) => {
//     let answer = 0

//      for(let i = 0; i <= number; i++){
//          answer += i
//     }


//     return answer 
// }

// console.log(solution(10))