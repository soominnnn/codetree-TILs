#include <iostream>
using namespace std;

int main() {
    string str;
    cin >> str;
    for (int i = str.length() - 1; i >= 0; i-- ) {
        if (i % 2 != 0) {
            cout << str[i];
        }
    }
    return 0;
}