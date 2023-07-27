function solution(num_list) {
    return oddNumbers = parseInt(num_list.filter(num => num % 2 !== 0).join('')) + parseInt(num_list.filter(num => num % 2 === 0).join(''));
}