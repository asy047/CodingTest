function solution(num_list) {
    var result = [0, 0];
    num_list.forEach((element) => element % 2 === 0 ? result[0]++ : result[1]++)
    return result;
}