function solution(numbers) {
    return numbers.reduce((acc, value) => [...acc, value * 2], []);
}