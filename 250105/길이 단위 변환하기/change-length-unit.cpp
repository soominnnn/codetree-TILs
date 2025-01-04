#include <iostream>
using namespace std;

int main() {
    double ft_cm = 30.48;
    int mi_cm = 160934;
    double ft = 9.2;
    double mi = 1.3;
    double ft_to_cm = ft * ft_cm;
    double mi_to_cm = mi * mi_cm;

    cout << fixed;
    cout.precision(1);

    cout << ft << "ft" << " = " << ft_to_cm << "cm" << endl;
    cout << mi << "mi" << " = " << mi_to_cm << "cm" << endl;
    return 0;
}