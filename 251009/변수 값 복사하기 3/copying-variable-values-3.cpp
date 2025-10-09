#include <iostream>
using namespace std;

int main() {
    // Please write your code here.
    int a = 1;
    int b = 5;
    int c = 3;

    a = c;
    a += c;
    b -= c;

    cout << a << endl << b << endl << c;
    return 0;
}