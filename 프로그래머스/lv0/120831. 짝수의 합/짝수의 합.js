function solution(n) {
    // let answer = 0;
    // let i = 0;
    // while(i <= n) {
    //     i % 2 === 0 ? answer += i : i;
    //     i++;
    // }
    // return answer;
    var half = Math.floor(n/2);
    return half*(half+1);
}