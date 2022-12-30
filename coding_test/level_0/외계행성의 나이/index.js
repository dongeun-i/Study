// 문제 설명
// 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// age는 자연수입니다.
// age ≤ 1,000
// PROGRAMMERS-962 행성은 알파벳 소문자만 사용합니다.
// 입출력 예
// age	result
// 23	"cd"
// 51	"fb"
// 100	"baa"

function solution(age) {
    let en_age = ""; //정답이 될 나이
    let split_age = age.toString().split(""); //숫자 하나하나 조각내주고 배열형태로 변환
    split_age.map((num) => {
        // fromChartCode : UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환합니다.
        // "a".charCodeAt()을 실행시 "a"는 97이라는것을 알 수 있다.
        let en_num = String.fromCharCode(Number(num) + 97);
        return (en_age += en_num);
    });

    return en_age;
}
