#include <iostream>
using namespace std;

int main() {
    string str;
    string result;
    int count = 0;
    cin >> count;
    
    for (int i = 0; i < count; i++) {
        cin >> str;
        result += str;
    }

    cout << result;
    return 0;
}