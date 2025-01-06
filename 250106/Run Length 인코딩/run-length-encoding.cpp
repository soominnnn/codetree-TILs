#include <iostream>
#include <string>

using namespace std;

string A;

int main() {
    cin >> A;
    string result;
    char find_str = A[0];
    int count = 0;

    for (int i = 0; i < A.length(); i++) {
        if(A[i] != find_str) {
            result += find_str + to_string(count);
            find_str = A[i];
            count = 1;
        } 
        else if (A[i] == find_str) {
            count += 1;
        }
    }

    result += find_str + to_string(count);
    cout << result.length() << endl << result;
    return 0;
}
