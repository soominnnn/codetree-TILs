#include <iostream>
using namespace std;

int main() {
    string arr[10];
    int count = 0;

    for (int i = 0; i < 10; i++) {
        cin >> arr[i];
        count += arr[i].length();
    }

    cout << count;
    return 0;
}