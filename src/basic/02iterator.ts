{
    /**
     * 实现 Symbol.iterator 方法的对象可以被 for...of 循环遍历。
     */
    let range = {
        from: 1,
        to: 5,
        // 实现 Symbol.iterator 方法
        [Symbol.iterator]: function() {
            return {
                current: this.from,
                last: this.to,
                // next 方法返回迭代结果
                next: function() {
                    if (this.current <= this.last) {
                        // 未完成，返回当前值并递增
                        return { done: false, value: this.current++ };
                    }
                    // 已完成
                    return { done: true, value: undefined };
                }
            };
        }
    };

    //使用 for...of 遍历
    for (let v of range) {
        console.log(v);
    }

    /**
     * 生成器
     */
    function* idGen(): Generator<number, void, unknown> {
        let i = 0
        while (i < 10) {
            yield i++
        }
    }

    const gen = idGen()
    const nums: number[] = Array.from(gen)
    console.log(nums)
}