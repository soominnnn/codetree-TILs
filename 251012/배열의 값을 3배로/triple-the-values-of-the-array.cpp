#include <iostream>
using namespace std;

int main() {
    // Please write your code here.
    int matrix[3][3] = {};

    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cin >> matrix[i][j];
            matrix[i][j] *= 3;
            cout << matrix[i][j] << " ";
        }
        cout << "\n";
    }
    return 0;
}