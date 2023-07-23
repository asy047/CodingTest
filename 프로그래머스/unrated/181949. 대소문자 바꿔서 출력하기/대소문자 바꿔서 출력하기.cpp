#include <iostream>
#include <string>

using namespace std;

int main(void) {
    string str;
    cin >> str;
    int count = 0;
    while(str.size()-count) {
        if (isupper(str[count])){
            str[count] = tolower(str[count]);
        }
        else if (islower(str[count])){
            str[count] = toupper(str[count]);
        }
        count++;
    }
    
    cout << str;
    return 0;
}