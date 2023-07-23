#include <string>
#include <vector>

using namespace std;

string solution(string my_string, string overwrite_string, int s) {
    //str.raplace(n, k, str2) str의 n번쨰 인덱스부터 k까지 str2로 대체
    my_string.replace(s, overwrite_string.length(), overwrite_string);
    string answer = my_string;
    return answer;
}