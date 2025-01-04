#include <iostream>
using namespace std;

int main() {
    double ft_cm = 30.48;
    double ft;
    cin >> ft;

    cout << fixed;
    cout.precision(1);
    cout << ft * ft_cm;
    return 0;
}