{
    let t: [string, number, boolean] = ['hello', 123, true]
    t.push(1)
    console.log(t)

    let t2: [1, '1'] = [1, '1']
    // t2.push(2)
    console.log(t2)
}

{
    let t = [42, 'hello'] as const

}