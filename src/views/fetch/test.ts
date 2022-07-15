let func = (a: number, b: number, radio: number = 0.6): number => {
    // ？ 说明是可选参数，不传的时候打印出来值是 undefined
    return a * b * radio
};
let nums: number = func(1, 2, 3);

// console.log(nums)


// 这一步定义的是函数的结构，不是具体的实现
// 定义传参和返回值
let addFunc: (a: number, b: number) => number
// 这里才是定义具体实现
addFunc = (x: number, y: number) => {
    return 1 + x + y
}
console.log(addFunc(2, 4));
