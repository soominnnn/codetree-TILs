#include <iostream>
using namespace std;

int main() {
    // Please write your code here.
    int arr[10] = {};
    cin >> arr[0] >> arr[1];

    for (int i = 0; i < 10; i++) {
        if (i >= 2) {
            int n = arr[i - 1] + arr[i - 2];
            arr[i] = n >= 10 ? n - 10 : n;
        }

        cout << arr[i] << " ";
    }
    return 0;
}