// 문자열안에 문자열
// 문제 설명
// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ str1의 길이 ≤ 100
// 1 ≤ str2의 길이 ≤ 100
// 입출력 예
// str1	str2	result
// "ab6CDE443fgh22iJKlmn1o"	"6CD"	1
// "ppprrrogrammers"	"pppp"	2

function solution(str1, str2) {
    // str1 안에 str2가 있을 경우 index가 -1이 아닐거고 -1이 아니라면 문자열에 포함되어있다.
    if (str1.indexOf(str2) != -1) return 1;
    else return 2;
}
