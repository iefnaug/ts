{
    // Symbol 类型注解
    let sym: symbol = Symbol("key");

    // 对象的键类型为 symbol，值为 string
    let obj: { [key: symbol]: string } = {};

    // 使用 Symbol 作为键
    obj[sym] = "value";
    console.log("Symbol 属性值: " + obj[sym]);
}
/**
 * 唯一性：每次 Symbol() 调用的值都不同
 * 不可枚举：Symbol 属性不会出现在 for...in 循环中
 * JSON 忽略：Symbol 属性不会被 JSON 序列化
 * 全局注册：Symbol.for() 在全局注册表中共享
 */