var func = function (a, b, radio) {
    if (radio === void 0) { radio = 0.6; }
    // ？ 说明是可选参数，不传的时候打印出来值是 undefined
    return a * b * radio;
};
var nums = func(1, 2, 3);
// console.log(nums)
// 这一步定义的是函数的结构，不是具体的实现
// 定义传参和返回值
var addFunc;
// 这里才是定义具体实现
addFunc = function (x, y) {
    return 1 + x + y;
};
console.log(addFunc(2, 4));
