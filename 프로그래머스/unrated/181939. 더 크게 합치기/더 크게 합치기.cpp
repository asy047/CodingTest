#include <string>
#include <vector>

using namespace std;

int solution(int a, int b) {
    int answer = stoi(to_string(a) + to_string(b)) > stoi(to_string(b) + to_string(a)) ? stoi(to_string(a) + to_string(b)) : stoi(to_string(b) + to_string(a));
    //return max(stoi(to_string(a)+to_string(b)),stoi(to_string(b)+to_string(a)));
    return answer;
}