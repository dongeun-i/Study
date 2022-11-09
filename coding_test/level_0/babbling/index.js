function solution(babbling) {
    var answer = 0;
    let reg = /^(aya|ye|woo|ma)/;
    babbling.map((word) => {
        let now_word = word;
        while (now_word != "") {
            if (reg.test(now_word)) {
                now_word = now_word.replace(reg, "");
                if (now_word === "") ++answer;
            } else break;
        }
    });
    return answer;
}
