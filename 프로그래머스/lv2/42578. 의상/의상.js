function solution(clothes) {
    var answer = 1;
    let hashTable = {}; // 값을 받을 Hash Table 생성 

    clothes.forEach((element) => { 
      let key = element[1]; // 최초 key 값 생성
        
      if (hashTable[key] === undefined) { // 최초 key 값에서 value를 찾았을 때 undefined가 나오면
          hashTable[key] = [element[0]];  // 새로 key: value 생성
      } else {
          hashTable[key].push(element[0]);// 있으면 key 값에 value 추가
      }
    });

    for(const [key, value] of Object.entries(hashTable)) { // Object.entries -> key, value로 제어 가능
        answer *= (value.length + 1);                      
    }
    return answer - 1; // 조건부 확률 => (2 + 1) * (1 + 1) - 1
    
    // return Object.values(clothes.reduce((obj, t)=> {
    //     obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
    //     return obj;
    // } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
}