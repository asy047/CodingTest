function solution(code) {
    let mode = 0;
    let ret = "";
    code.split('').forEach((v, idx) => {
        if(mode === 0) {
            v === '1' ? mode = 1 : idx % 2 == 0 ? ret += v : 0;
        } else if (mode === 1) {
            v === '1' ? mode = 0 : idx % 2 == 0 ? 0 : ret += v;;
        }
    })
    return ret.length > 0 ? ret : "EMPTY";
}