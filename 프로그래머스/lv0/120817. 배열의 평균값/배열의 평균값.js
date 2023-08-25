function solution(numbers) {
    const answer = numbers.reduce((acc, num) => {
        return acc + num;
    })
    return answer / numbers.length;
}