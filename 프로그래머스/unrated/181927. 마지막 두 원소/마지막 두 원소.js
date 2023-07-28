function solution(num_list) {
    //  num_list[num_list.length - 1] > num_list[num_list.length - 2] ? 
    //      num_list.push(num_list[num_list.length - 1] - num_list[num_list.length - 2]) :
    //      num_list.push(num_list[num_list.length - 1] * 2)
    // return num_list
    
    const [a, b] = [...num_list].reverse(); // 인덱스 기준으로 reverse 한 값 앞에 두개를 a, b에 받음
    return [...num_list, a > b ? (a-b) : a*2]; // 비교해서 기존 num_list와 a b 비교한 값을 넣음

}