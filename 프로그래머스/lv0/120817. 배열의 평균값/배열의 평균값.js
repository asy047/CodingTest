function solution(numbers) {
    return numbers.reduce((acc, num) => {
        return acc + num;
    }) / numbers.length;
}