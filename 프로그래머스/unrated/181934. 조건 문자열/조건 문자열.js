function solution(ineq, eq, n, m) {
    return eq == '=' ? 
        (ineq == '<' ? n <= m ? 1 : 0 : n >= m ? 1 : 0) : 
        (ineq == '>' ? n > m ? 1 : 0 : n < m ? 1 : 0); 
}

// const operations = {
//   '>=': (n, m) => n >= m,
//   '<=': (n, m) => n <= m,
//   '>!': (n, m) => n > m,
//   '<!': (n, m) => n < m,
// };

// function solution(ineq, eq, n, m) {
//   const op = operations[ineq + eq];
//   return Number(op(n, m));
// }
