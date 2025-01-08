#include <iostream>
#include <algorithm>
#include <functional>

using namespace std;

int n;
int nums[100];

void repeat_function(int n, int arr[]) {
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    cin >> n;

    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }

    sort(nums, nums + n);
    repeat_function(n, nums);
    sort(nums, nums + n, greater<int>());
    repeat_function(n, nums);

    // Write your code here!

    return 0;
}
