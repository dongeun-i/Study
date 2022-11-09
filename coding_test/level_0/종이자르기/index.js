// 머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다. 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.

function solution(M, N) {
    var answer = M * N - 1;
    // 2x2 = 3번 , 2x5 = 9번 , 1x1 = 0번
    //즉, M x N 크기로 자르려면 최소 M * N -1 회의 가위질이 필요
    return answer;
}
