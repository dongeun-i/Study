// 문제 설명
// 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

// 선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 길이 2만큼 겹쳐있습니다.

// 제한사항
// lines의 길이 = 3
// lines의 원소의 길이 = 2
// 모든 선분은 길이가 1 이상입니다.
// lines의 원소는 [a, b] 형태이며, a, b는 각각 선분의 양 끝점 입니다.
// -100 ≤ a < b ≤ 100
// 입출력 예
// lines						result
// [[0, 1], [2, 5], [3, 9]]		2
// [[-1, 1], [1, 3], [3, 9]]	0
// [[0, 5], [3, 9], [1, 10]]	8

function solution(lines) {
    var overlapLines = [];
    //시작 ~ 끝 까지 배열로 채우기
    lines = lines.map((line) => {
        let curLineLength = Math.abs(line[0] - line[1]);
        let cur_line = Array(curLineLength + 1)
            .fill(line[0])
            .map((v, i) => {
                return v + i;
            });
        return cur_line;
    });
    // lines를 반복
    for (let i = 0; i < lines.length; i++) {
        // 다음 line을 반복
        let cur_line = lines[i];
        for (let j = i + 1; j < lines.length; j++) {
            let next_line = lines[j];
            // line[i]의 요소를 하나씩 반복
            for (let k = 0; k < cur_line.length; k++) {
                let cur_num = cur_line[k];
                // cur_num 이 next_line 에 포함 (겹치기 시작한구간);
                if (next_line.indexOf(cur_num) != -1) {
                    let cur_num_idx = cur_line.indexOf(cur_num);
                    let next_num_idx = next_line.indexOf(cur_num);
                    // 다음숫자도 겹친다면 push !
                    if (
                        cur_line[cur_num_idx + 1] != undefined &&
                        cur_line[cur_num_idx + 1] == next_line[next_num_idx + 1]
                    ) {
                        overlapLines.push(cur_num);
                    }
                }
            }
        }
    }
    // 중복된 요소 제거
    overlapLines = [...new Set(overlapLines)];
    return overlapLines.length;
}
