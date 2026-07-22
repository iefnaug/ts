{
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.concat([3]));

    let result = arr.every((element, index) => {
        return element > 3
    })
    console.log(result)

    let filtered= arr.filter((element, index, array) => {
        return element > 2
    })
    console.log(filtered)

    arr.forEach((element, index, array) => {
        console.log(element)
    })

    let mapped = arr.map((element, index, array) => {
        return element * 2
    })
    console.log(mapped)

    let reduced = arr.reduce((a, b) => a + b)
    console.log(reduced)

    //slice不改变原数组
    let numbers1 = arr.slice(1, 3);
    console.log(numbers1)

    //splice 修改原数组
    let numbers = arr.splice(1, 2);
    console.log(numbers)
    console.log(arr)
}