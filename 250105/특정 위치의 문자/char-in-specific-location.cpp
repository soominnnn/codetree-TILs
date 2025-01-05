#include <iostream>
using namespace std;

int main() {
    char word[6] = {'L', 'E', 'B', 'R', 'O', 'S'};
    char find;
    cin >> find;
    int index = -1;

    for (int i = 0; i < 6; i++) {
        if (word[i] == find) {
            index = i;
        }
    }

    if (index != -1) {
        cout << index;
    } else {
        cout << "None";
    }
    return 0;
}