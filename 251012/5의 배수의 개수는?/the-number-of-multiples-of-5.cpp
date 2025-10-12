#include <iostream>
using namespace std;

int main() {
    // Please write your code here.
    int count = 0;
    int matrix[4][4] = {};

    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            cin >> matrix[i][j];

            if (matrix[i][j] % 5 == 0) {
                count += 1;
            }
        }
    }

    cout << count;
    return 0;
}