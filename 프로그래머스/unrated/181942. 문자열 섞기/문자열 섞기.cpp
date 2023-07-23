#include <string>
#include <vector>

using namespace std;

string solution(string str1, string str2) {
    // 내 풀이
    // string answer = "";
    // for(int i = 0; i < str1.length(); i++){
    //     answer += str1[i];
    //     answer += str2[i];
    // 
    
    string answer = "";
    for(int i=0; i<str1.length(); i++)
    {
        answer.push_back(str1[i]); // push_back의 존재를 알다..
        answer.push_back(str2[i]);
    }
    return answer;
}