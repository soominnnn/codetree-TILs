#include <iostream>
using namespace std;

int main() {
    // Please write your code here.
    string A, B;
    cin >> A >> B;

    if (A.length() > B.length()) {
        cout << A << " " << A.length();
    }
    else if (A.length() == B.length()) {
        cout << "same";
    }
    else {
        cout << B << " " << B.length();
    }
    return 0;
}