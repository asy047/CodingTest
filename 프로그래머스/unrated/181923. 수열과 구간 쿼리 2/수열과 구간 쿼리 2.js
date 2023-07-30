function solution(arr, queries) {
   return queries.map(([s, e, k]) => {
       let num = Math.min(...arr.slice(s,e+1).filter(el => el > k));
       return num === Infinity ? -1 : num;
    })
}
// test