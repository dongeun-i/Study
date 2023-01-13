// k의 개수
// 문제 설명
// 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ i < j ≤ 100,000
// 0 ≤ k ≤ 9
// 입출력 예
// i	j		k	result
// 1	13		1	 6
// 10	50		5	 5
// 3	10		2	 0

// 나의 풀이
function solution(i, j, k) {
    var answer = 0;
    let count = j - i + 1;
    Array(count)
        .fill(i)
        .map((n, i) => {
            let number = n + i;
            let regexp = new RegExp(`[^${k}]`, "g");
            let k_count = number.toString().replace(regexp, "").length;
            answer += k_count;
        });
    return answer;
}

// 다른사람의 풀이
function otherSolution(i, j, k) {
    let a = "";
    for (i; i <= j; i++) {
        a += i;
    }

    return a.split(k).length - 1;
}
