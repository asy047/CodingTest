function solution(arr, queries) {
    queries.map((v) => {
        sw(arr, v[0], v[1])
    })
    return arr;
}
function sw(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr[index1];
}