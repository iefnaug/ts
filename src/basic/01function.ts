{
    /**
     * 重载
     */

    // 函数重载签名
    function add(a: number, b: number): number;
    function add(a: string, b: string): string;

    //必须覆盖所有的签名
    function add(a: any, b: any): string | number {
        return a + b
    }

    //多参数重载
    function greet(name: string): string;
    function greet(name: string, greeting?: string): string;

    function greet(name: any, greeting?: string): string {
        if (greeting) {
            return greeting + ", " + name + "!";
        }
        return "Hello, " + name + "!";
    }

    greet('1', 'a')
}