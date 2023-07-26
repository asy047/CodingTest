function solution(ineq, eq, n, m) {
    return eq == '=' ? 
        (ineq == '<' ? n <= m ? 1 : 0 : n >= m ? 1 : 0) : 
        (ineq == '>' ? n > m ? 1 : 0 : n < m ? 1 : 0); 
}