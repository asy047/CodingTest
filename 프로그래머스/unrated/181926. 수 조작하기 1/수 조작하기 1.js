function solution(n, control) {
    for (let c of control){
        switch(c) {
            case "w": n += 1; break;
            case "s": n -= 1; break;
            case "d": n += 10; break;
            case "a": n -= 10; break;
        }
    }
    return n;
}
// const operations = {
//   w: (n) => n + 1,
//   s: (n) => n - 1,
//   d: (n) => n + 10,
//   a: (n) => n - 10,
// };

// function solution(n, control) {
//   return [...control].reduce((prev, op) => operations[op](prev), n);
// }