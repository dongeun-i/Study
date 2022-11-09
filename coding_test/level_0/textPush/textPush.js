// 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 몇 번 밀어야 하는지 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

function solution(A, B) {
    let startWords = [...A];
    let count = 0;
    // 한 음절씩 옮겼을때 비교하기 위해 반복문
    for (word of startWords) {
        // B와 같을때 count를 return
        if (A === B || startWords.join("") === B) return count;
        else {
            // 다를때마다 뒤에 글자를 제일 앞으로 이동
            startWords.unshift(startWords.pop());
            ++count;
        }
    }
    // 반복을 돌아도 없으면 return -1
    return -1;
}
