{
    // Promise.all：并行执行多个 Promise，等待所有 Promise 都完成，再返回结果
    Promise.all([Promise.resolve(1), Promise.resolve(2)])
        .then(res => console.log(res))

    // Promise.race：并行执行多个 Promise，只要有一个 Promise 完成，就返回结果
    Promise.race([Promise.resolve(1), Promise.resolve(2)])
        .then(res => console.log(res))
}

{
    // 创建三个 Promise，其中一个会失败
    let p1 = Promise.resolve("成功");
    let p2 = Promise.reject(new Error("失败"));
    let p3 = Promise.resolve("完成");

    // Promise.allSettled 等待所有 Promise 结束
    // 返回每个 Promise 的状态和值/reason
    Promise.allSettled([p1, p2, p3]).then(function(results) {
        results.forEach(function(result, index) {
            console.log(result);
            if (result.status === "fulfilled") {
                console.log("Promise " + index + ": " + result.value);
            } else {
                console.log("Promise " + index + ": " + result.reason.message);
            }
        });
    });
}

/**
 * Promise：异步操作容器，有 pending/fulfilled/rejected 三种状态
 * then/catch：链式处理异步结果
 * Promise.all：等待全部完成，任一失败则整体失败
 * Promise.race：返回最先完成的结果
 * Promise.allSettled：等待全部结束，返回每个的状态
 */