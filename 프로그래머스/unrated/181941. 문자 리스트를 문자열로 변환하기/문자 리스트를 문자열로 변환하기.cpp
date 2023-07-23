#include <string>
#include <vector>

using namespace std;

string solution(vector<string> arr) {
    string answer = "";
    for(string c : arr)
        answer.append(c);
    return answer;
}