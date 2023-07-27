function solution(num_list) {
    let r1 = 1, r2 = 0;
    num_list.forEach(v => {
        r1 *= v; r2 += v;
    })
    return r1 > Math.pow(r2, 2) ? 0 : 1;
}