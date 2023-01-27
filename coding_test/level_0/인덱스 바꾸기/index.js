// 문제 설명
// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 < my_string의 길이 < 100
// 0 ≤ num1, num2 < my_string의 길이
// my_string은 소문자로 이루어져 있습니다.
// num1 ≠ num2
// 입출력 예

// my_string	num1	num2	result
// "hello"		1		2		"hlelo"
// "I love you"	3		6		"I l veoyou"

function solution(my_string, num1, num2) {
    let my_string_arr = my_string.split("");
    // 배열 디스트럭처링 (Array destructuring)
    // ex)
    // let x, y, z;

    // [x, y] = [1, 2];
    // console.log(x, y); // 1 2

    // [x, y] = [1];
    // console.log(x, y); // 1 undefined

    // [x, y] = [1, 2, 3];
    // console.log(x, y); // 1 2

    // [x, , z] = [1, 2, 3];
    // console.log(x, z); // 1 3

    // // 기본값
    // [x, y, z = 3] = [1, 2];
    // console.log(x, y, z); // 1 2 3

    // [x, y = 10, z = 3] = [1, 2];
    // console.log(x, y, z); // 1 2 3

    // // spread 문법
    // [x, ...y] = [1, 2, 3];
    // console.log(x, y); // 1 [ 2, 3 ]

    [my_string_arr[num1], my_string_arr[num2]] = [
        my_string_arr[num2],
        my_string_arr[num1],
    ];
    return my_string_arr.join("");
}
