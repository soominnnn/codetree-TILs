#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    string arr[n];
    int count = 0, length = 0;

    for (int i = 0; i < n; i++) {
        cin >> arr[i];

        if (arr[i][0] == 'a') {
            count += 1;
        }

        length += arr[i].length();
    }
    cout << length << " " << count;
    return 0;
}