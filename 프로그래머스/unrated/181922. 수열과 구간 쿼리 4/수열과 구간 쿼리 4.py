def solution(arr, queries):
    result = arr.copy()  # 결과 배열을 초기 배열로 복사
    
    for query in queries:
        s, e, k = query
        for i in range(s, e + 1):
            if i % k == 0:
                result[i] += 1;
    
    return result
