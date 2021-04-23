/**
 * 剑指 Offer 11. 旋转数组的最小数字
 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。

 示例 1：

 输入：[3,4,5,1,2]
 输出：1
 示例 2：

 输入：[2,2,2,0,1]
 输出：0
 注意：本题与主站 154 题相同：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/
 */
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    let low = 0, high = numbers.length - 1;
    while (low < high) {
        const pivot = low + Math.floor((high - low) / 2); // 注意js除法会出现小数
        if (numbers[pivot] < numbers[high]) {
            high = pivot
        } else if (numbers[pivot] > numbers[high]) {
            low = pivot + 1;
        } else {
            high--;
        }
    }
    return numbers[low];
};


// const numbers = [3, 4, 5, 1, 2];
// const numbers = [2,2,2,0,1];
const numbers = [3, 1];
let result = minArray(numbers);
console.log(result);
