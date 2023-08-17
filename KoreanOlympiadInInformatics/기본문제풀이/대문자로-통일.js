// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력 하는 프로그램을 작성하세요.

//메모
// 1. charCodeAt 메소드는 문자열을 유니코드로 변환시켜주고 fromCharCode 메소드는 유니코드를 문자열로 변환시켜준다
// 2. 알파벳 A의 유니코드는 65부터 Z까지 1씩 증가하고 알파벳 a의 유니코드는 97부터 z까지 1씩증가한다
// 3. 즉 알파벳 대문자와 소문자에 유니코드 차이는 32이다

// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 대문자로 통일된 문자열이 출력된다.

// ▣ 입력예제 1
// ItisTimeToStudy
// ▣ 출력예제 1
// ITISTIMETOSTUDY

const solution = (word) => {
  let answer = "";

  for (let letter of word) {
    const letterUnicode = letter.charCodeAt();

    65 <= letterUnicode || letterUnicode <= 90
      ? (answer += letter.toUpperCase())
      : (answer += letter);
  }

  return answer;
};

console.log(solution("ItisTimeToStudy"));
