{
    let map = new Map<string, number>();
    map.set("a", 1);
    map.set("b", 2);
    map.set("c", 3);
    map.set("d", 4);
    map.set("e", 5);
    console.log(map)
    console.log(map.get('a'))
    console.log(map.has('a'))
    console.log(map.size)
    map.delete('a')
    console.log(map)
    console.log(map.keys());
    console.log(map.values());
    console.log(map.entries());
    // map.clear()
    console.log(map.size);
    for (let key of map.keys()) {
        console.log(key)
    }
}