{
    let empty: null = null
    let nothing: undefined = undefined
}

{
    function greet(name?: string) {
        if (!name) {
            return 'stranger'
        }
        return `hello ${name}`
    }

    let name = 'ts'
    //??空值合并
    console.log(greet(name ?? 'stranger'))
    console.log(greet());

    //可选链操作符
    interface Person {
        name: string;
        address?: {
            city: string;
        };
    }

    // 创建人员对象，没有地址
    let person: Person = { name: "Alice" };
    console.log(person.address?.city ?? 'unknown');
}
