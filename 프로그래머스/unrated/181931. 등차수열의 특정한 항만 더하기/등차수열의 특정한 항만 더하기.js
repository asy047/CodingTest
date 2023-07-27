function solution(a, d, included) {
    let result = 0;
    included.forEach((value, idx) => {
        value ? result += a + (d * idx) : 0;
    })
    return result;
}