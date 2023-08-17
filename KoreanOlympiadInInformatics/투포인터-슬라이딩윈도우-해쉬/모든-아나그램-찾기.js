// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

// ▣ 입력설명
// 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다. S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.

// ▣ 출력설명
// S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.

// ▣ 입력예제 1
// bacaAacba
// abc

// ▣ 출력예제 1
// 3

const isAnagramHandler = (variableStr, constantObj) => {
  let isAnagram = true;

  const variableObj = new Map();

  for (let x2 of variableStr) {
    variableObj.has(x2)
      ? variableObj.set(x2, variableObj.get(x2) + 1)
      : variableObj.set(x2, 1);
  }

  for (const [key, value] of constantObj) {
    if (!variableObj.has(key) || variableObj.get(key) !== value) {
      isAnagram = false;
      break;
    }
  }

  return isAnagram;
};

const solution = (str1, str2) => {
  let answer = 0;
  const m = str1.length;
  const n = str2.length;

  const str1Map = new Map();

  for (x1 of str1) {
    str1Map.has(x1) ? str1Map.set(x1, str1Map.get(x1) + 1) : str1Map.set(x1, 1);
  }

  for (let i = 0; i <= n - m; i++) {
    let variableStr = str2.slice(i, m + i);
    if (isAnagramHandler(variableStr, str1Map)) answer++;
  }

  return answer;
};

console.log(solution("abc", "bacaAacba"));
