#include <iostream>
using namespace std;

int main() {
    string str[10];
    char find_str;
    int count = 0;

    for (int i = 0; i < 11; i++) {
        if (i != 10){
            cin >> str[i];
        } else {
            cin >> find_str;
        }
    }

    for (int i = 0; i < 10; i++) {
        if (str[i][str[i].length() - 1] == find_str) {
            cout << str[i] << endl;
            count += 1;
        }
    }

    if (count == 0) {
        cout << "None";
    }
    return 0;
}