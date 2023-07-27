function solution(a, b, c) {
    let result = 0;
    let arr = [a, b, c];
    const uniqArrLen = arr.filter((el, index) => arr.indexOf(el) === index).length;
    uniqArrLen === 3 ? result += a + b +c :
    uniqArrLen === 2 ? result += (a + b + c) * (a * a + b * b + c * c) :
    uniqArrLen === 1 ? result += (a + b + c) * (a * a + b * b + c * c) * (a * a * a + b * b * b + c * c * c) : result;
    return result;
}