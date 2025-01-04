#include <iostream>
using namespace std;

int main() {
    cout << fixed;

    int weight = 13;
    double gravity = 0.165;
    double result = weight * gravity;

    cout.precision(6);
    cout << weight << " * " << gravity << " = " << result;
    
    return 0;
}