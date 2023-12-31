// 5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.

// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19

// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(1<=N<=50) 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.

// ▣ 출력설명
// 최대합을 출력합니다.

// ▣ 입력예제 1
// 5
// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19

// ▣ 출력예제 1
// 155

const solution = (n, grid) => {
  let answer;

  let maxValue = 0;

  //열 최대값
  grid.forEach((row) => {
    const rowSum = row.reduce((acc, cur) => acc + cur, 0);

    if (rowSum > maxValue) maxValue = rowSum;
  });

  //행 최대값
  for (let i = 0; i < n; i++) {
    let columnSum = 0;

    for (let j = 0; j < n; j++) {
      columnSum += grid[j][i];
    }

    if (columnSum > maxValue) maxValue = columnSum;
  }

  //첫번째 대각선 최대값

  let diagonal1Sum = 0;

  grid.forEach((item, i) => {
    diagonal1Sum += item[i];

    if (diagonal1Sum > maxValue) maxValue = diagonal1Sum;
  });

  //두번째 대각선 최대값

  let diagonal2Sum = 0;

  grid.forEach((item, i) => {
    diagonal2Sum += item[n - i - 1];

    if (diagonal2Sum > maxValue) maxValue = diagonal2Sum;
  });

  answer = maxValue;

  return answer;
};

console.log(
  solution(5, [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
