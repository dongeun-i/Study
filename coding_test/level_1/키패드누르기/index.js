// 문제 설명
// 스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

// 1  2  3
// 4  5  6
// 7  8  9
// *  0  #

// 이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
// 맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

// 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
// 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
// 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
// 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
// 4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
// 순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

// [제한사항]
// numbers 배열의 크기는 1 이상 1,000 이하입니다.
// numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
// hand는 "left" 또는 "right" 입니다.
// "left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
// 왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.
// 입출력 예
// numbers	hand	result
// [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"
// [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"	"LRLLRRLLLRR"
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right"	"LLRLLRLLRL"

function solution(numbers, hand) {
    var answer = "";
    let leftPostion = [0, 0]; // 왼쪽 시작 위치
    let rightPostion = [2, 0]; //오른손 시작 위치

    let leftNumber = [7, 4, 1]; //왼손으로 누를 숫자
    let centerNumber = [0, 8, 5, 2]; //오른쪽,왼쪽으로 누를지 판단해야될 중앙 숫자
    let rightNumber = [9, 6, 3]; // 오른손으로 누를 숫자

    /**
     * @param {number[]} startPostion 출발지점
     * @param {number} end 도착해야될 숫자
     * @returns {number} 움직인 횟 수
     * @description 시작 좌표에서 출발하여 도착 지점까지 몇회 움직이는지 구하는 함수
     * */
    function calcDistance(startPostion, end) {
        let targetPostion = [1, centerNumber.indexOf(end)];
        let x_count = Math.abs(startPostion[0] - targetPostion[0]);
        let y_count = Math.abs(startPostion[1] - targetPostion[1]);
        return x_count + y_count;
    }
    /**
     * @param {"right"|"left"}hand
     * @param {number[]}postion 업데이트 시킬 좌표
     * @returns {void}
     * @description hnad로 받은 손의 좌표를 바꿔 해준다.
     * */
    function changePostion(hand, postion) {
        if (hand == "right") {
            answer += "R";
            rightPostion = postion;
        } else {
            answer += "L";
            leftPostion = postion;
        }
    }
    numbers.map((num) => {
        if (leftNumber.includes(num)) {
            leftPostion = [0, leftNumber.indexOf(num) + 1]; // 왼손 좌표 변경
            answer += "L";
        } else if (rightNumber.includes(num)) {
            rightPostion = [2, rightNumber.indexOf(num) + 1]; // 오른손 좌표 변경
            answer += "R";
        } else {
            let _hand = hand; // left or right
            let _postion = [1, centerNumber.indexOf(num)]; //num 을 좌표로 표현
            let leftCount = calcDistance(leftPostion, num); // 현재 왼손 위치에서 몇번을 이동해야되는지 계산
            let rightCount = calcDistance(rightPostion, num); // 현재 오른손 위치에서 몇번을 이동해야되는지 계산
            // 만약 둘이 같을 경우 주로 사용하는 손으로 움직인다
            if (leftCount == rightCount) {
                changePostion(hand, _postion);
            } else {
                _hand = leftCount > rightCount ? "right" : "left"; // 어떤손으로 움직이는 것이 효율적인지 판단. count가 적은 것
                changePostion(_hand, _postion);
            }
        }
    });

    return answer;
}
