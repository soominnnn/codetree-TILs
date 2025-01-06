#include <iostream>
using namespace std;

int main() {
    string arr[5] = {"apple", "banana", "grape", "blueberry", "orange"};
    char input;
    int count = 0;
    cin >> input;

    for (int i = 0; i < 5; i++) {
        if (arr[i][2] == input || arr[i][3] == input) {
            cout << arr[i] << endl;
            count += 1;
        }
    }
    
    cout << count;
    return 0;
}