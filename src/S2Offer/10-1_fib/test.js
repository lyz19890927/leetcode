/**
 * 剑指 Offer 10- I. 斐波那契数列
 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

 F(0) = 0,   F(1) = 1
 F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。



 示例 1：

 输入：n = 2
 输出：1
 示例 2：

 输入：n = 5
 输出：5


 提示：

 0 <= n <= 100
 */

/**
 * @param {number} n
 * @return {number}
 */
var fib_arr = function (n) {
    const farr = [0n, 1n]; // bigInt
    for (let i = 2; i <= n; i++) {
        farr[i] = farr[i - 1] + farr[i - 2];
    }
    console.log(farr)
    return farr[n] % 1000000007n;
};
var fib = function (n) {
    let a = 0, b = 1, sum;
    for (let i = 0; i < n; i++) {
        sum = a + b;
        a = b;
        b = sum;
        console.log(sum)
    }
    return a % 1000000007;
};
var fib2 = function (n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    let a = 0, b = 1, sum;
    for (let i = 2; i <= n; i++) {
        // sum = a + b;
        sum = (a + b) % 1000000007;
        a = b;
        b = sum;
        // console.log(sum)
    }
    // 模运算的加法，对和进行两次取模
    // (a + b) % p = (a % p + b % p) % p
    return sum;
};

console.log(Number.MAX_SAFE_INTEGER);

const n = 99;
let result = fib_arr(n)
console.log(result);
// result = fib(n);
// console.log(result);
result = fib2(n);
console.log(result);
