#include <iostream>
using namespace std;

int main() {
    // Please write your code here.
    int N, M;
    cin >> N >> M;

    int matrix1[N][M] = {};
    int matrix2[N][M] = {};
    int result[N][M] = {};

    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            cin >> matrix1[i][j];
        }
    }

    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            cin >> matrix2[i][j];
        }
    }

    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            if (matrix1[i][j] == matrix2[i][j]) {
                result[i][j] = 0;
            } else{
                result[i][j] = 1;
            }
            cout << result[i][j] << " ";
        }
        cout << "\n";
    }
    return 0;
}