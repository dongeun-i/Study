// 문제 설명
// 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < num < 1,000,000
// 0 ≤ k < 10
// num에 k가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.
// 입출력 예
// num		k	result
// 29183	1	3
// 232443	4	4
// 123456	7	-1

function solution(num, k) {
    var answer = num.toString().indexOf(k);
    // indexOf는 0부터 시작하기 때문에 index값에 +1 을 해주어서 return 한다. (자리수에는 0의 자리는없다 !)
    return answer != -1 ? answer + 1 : answer;
}
