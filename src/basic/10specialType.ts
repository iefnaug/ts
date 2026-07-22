{
    // 抛出异常的函数
    // 函数永远不会正常返回，总会抛出错误
    function throwError(message: string): never {
        throw new Error(message);
    }

    // 无限循环的函数
    // 函数永远不会返回，程序会一直运行
    function infiniteLoop(): never {
        while (true) {
            console.log("运行中...");
        }
    }
}

{
    // 定义形状的联合类型
    type Shape = { kind: "circle", radius: number }
        | { kind: "square", side: number }
        // | { kind: "trangle", side: number }

    // 计算形状面积
    function area(shape: Shape): number {
        switch (shape.kind) {
            case "circle":
                return Math.PI * shape.radius ** 2;
            case "square":
                return shape.side ** 2;
            default:
                // never 类型表示永远不会存在的值的类型。任何类型都不能赋值给 never，除了 never 本身。
                // default 分支应该处理所有未预料到的情况
                // 如果添加新的 Shape 类型但忘记处理，编译器会报错
                let _exhaustive: never = shape;
                return _exhaustive;
        }
    }

    let circle = { kind: "circle" as const, radius: 5 };
    let square = { kind: "square" as const, side: 4 };

    console.log("圆形面积: " + area(circle).toFixed(2));
    console.log("正方形面积: " + area(square));
}