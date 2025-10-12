#include <iostream>
using namespace std;

int main() {
    // Please write your code here.
    int total = 0;
    int matrix[4][4] = {};

    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            cin >> matrix[i][j];
            total += matrix[i][j];
        }
        cout << total << "\n";
        total = 0;
    }
    return 0;
}