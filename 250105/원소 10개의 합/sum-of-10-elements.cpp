#include <iostream>
using namespace std;

int main() {
    int arr[10];
    int result = 0;

    for (int i = 0; i < 10; i++) {
        cin >> arr[i];
        result += arr[i];
    }

    cout << result;
    return 0;
}