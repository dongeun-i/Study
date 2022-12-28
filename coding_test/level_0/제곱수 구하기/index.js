// 문제 설명
// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 1,000,000
// 입출력 예
// n	result
// 144	1
// 976	2
function solution(n) {
    var answer = 0;
    let rootNum = Math.sqrt(n);
    // 자연수라면 1로 나누었을떄 나머지가 0 이다
    if (rootNum % 1 !== 0) {
        answer = 2;
    } else {
        answer = 1;
    }
    return answer;
}
