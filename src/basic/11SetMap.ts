import {isWeakMap} from "node:util/types";

{
    let s: Set<string> = new Set();
    s.add('1');
    s.add('2');
    s.add('3');
    s.forEach(v => console.log(v));
}

{
    //WeakSet 不能遍历，类型注解只能是 object
    let s = new WeakSet();
    s.add({a: 1, b: 2});
    s.add({c: 3, d: 4})
    console.log(s.has({a: 1, b: 2})); //false
}
{
    let map: Map<string, number> = new Map();
    map.set("a", 1);
    map.set("b", 2);
    map.set("c", 3);
    map.forEach((v, k) => console.log(k, v));
}
{
    let map: WeakMap<object, number> = new WeakMap();
    map.set({a: 1}, 1);
    map.set({a: 1}, 2);
    map.set({a: 1}, 3);
    console.log(map.has({a: 1}));
}