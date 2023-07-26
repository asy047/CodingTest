function solution(n) {
    var answer = 0;
    // var i = 0;
    // if (n % 2 == 0) {
    //     i = 2;
    //     while(i <= n) { answer += (i*i); i += 2;}
    // } else {
    //     i = 1;
    //     while (i <= n) { answer += i; i += 2;}
    // }
    
    if(n%2===1)
      return  (n+1)/2*((n + 1)/2) ;
    else
      return   n*(n+1)*(n+2)/6;
    
    return answer;
}