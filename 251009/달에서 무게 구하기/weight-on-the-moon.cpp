#include <iostream>
using namespace std;

int main() {
    // Please write your code here.
    int a = 13;
    double b = 0.165;
    
    cout << fixed;
    cout.precision(6);
    
    // 출력
    cout << a << " * " << b << " = " << a * b << endl;
    return 0;
}