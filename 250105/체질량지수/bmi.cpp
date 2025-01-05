#include <iostream>
using namespace std;

int main() {
    int height, weight;
    cin >> height >> weight;
    
    cout << fixed;
    cout.precision(0);
    double bmi = (10000 * weight) / (height * height);
    cout << bmi << endl;

    if (bmi >= 25) {
        cout << "Obesity";
    }
    return 0;
}