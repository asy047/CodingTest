function solution(numLog) {
    let result = ""
    numLog.forEach((v, idx) => {
        let num = Math.abs(numLog[idx+1] - v);
        if(num){
        num === 1 ? 
            numLog[idx + 1] > v ? 
            result += "w" : result += "s"
        : numLog[idx + 1] > v ?
            result += "d" : result += "a"
        }
    })
    return result;
}