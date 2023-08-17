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

const solution = (arr) => {
  let answer;

  const getPrimeNumber = (number) => {
    let isPrime = true;

    if (number <= 1) isPrime = false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
      }
    }
    return isPrime;
  };

  const newArr = arr.map((number) => {
    let newNumber = 0;

    while (number) {
      let test = number % 10;
      newNumber = newNumber * 10 + test;

      number = Math.floor(number / 10);
    }

    return newNumber;
  });

  answer = newArr.filter((newNumber) => getPrimeNumber(newNumber) === true);

  return answer;
};

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
