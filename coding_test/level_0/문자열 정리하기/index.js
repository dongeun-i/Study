// 문제 설명
// 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < my_string 길이 < 100
// 입출력 예
// my_string	result
// "Bcad"		"abcd"
// "heLLo"		"ehllo"
// "Python"		"hnopty"

function solution(my_string) {
    let split_string = my_string.toLowerCase().split("").sort().join("");
    return split_string;
}
