{
    let promise = new Promise((resolve, reject) => {
        let success = true;
        if (success) {
            resolve('success');
        } else {
            reject('error');
        }
    })

    promise.then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}

{
    /**
     * async
     */
    async function greet(): Promise<string> {
        return 'Hello';
    }
    greet().then((res) => {
        console.log('result is:', res)
    })

    async function getData() {
        return {
            name: 'gf',
            age: 5,
        }
    }

    getData().then(res => {
        console.log(res)
    })
}

{
    /**
     * await 等待 Promise 解析结果
     */
    function delay(ms: number): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('success');
            }, ms);
        })
    }

    async function main() {
        console.log('start...')
        let v = await delay(1000)
        console.log('done..', )
    }

    main().then(res => console.log('main done'))
}

{
    function mayFail(shouldFail: boolean) {
        return new Promise((resolve, reject) => {
            console.log('mayFail start...')
            if (shouldFail) {
                reject(new Error('error occurred'));
            } else {
                resolve('success');
            }
            console.log('mayFail done...')
        })
    }

    mayFail(true)
        .then(res => console.log(res))
        .catch(err => console.log(err.message))
}


{
    //并行执行多个 Promise
    function fetchUser(id: number): Promise<{id: number, name: string}> {
        return Promise.resolve({id, name: `User-${id}`})
    }

    async function main() {
        console.log('串行执行多个 Promise')
        let u1 = await fetchUser(1)
        let u2 = await fetchUser(2)
        console.log(u1, u2)

        console.log('并行执行多个 Promise')
        let [u11, u22] = await Promise.all([fetchUser(1), fetchUser(2)])
        console.log(u11, u22)
    }
    main().catch(err => console.log(err))
}

console.log('============================>async')

/**
 * async：声明异步函数
 * await：等待 Promise
 * 错误处理：try/catch
 * 并行：Promise.all
 */