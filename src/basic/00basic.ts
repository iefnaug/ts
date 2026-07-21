{
    enum Role {
        Admin,
        User,
        Guest,
    }

    interface User {
        id: number
        username: string
        isActive: boolean
        role: Role
        hobbies: string[]
        contactInfo: [string, number]
    }

    const user: User = {
        id: 1,
        username: 'Alice',
        isActive: false,
        role: Role.Admin,
        hobbies: ['Reading', 'Gaming'],
        contactInfo: ['+1', 123456789]
    }

    function getUserInfo(user: User) {
        return `User ${user.username} is ${user.isActive ? 'Active' : 'Inactive'} with role ${user.role}`
    }

    function printUserInfo(user: User) {
        console.log(getUserInfo(user))
    }

    function queryUser(query: number | string): User | undefined {
        if (typeof query === 'number') {
            return query === user.id ? user : undefined
        }
        return query === user.username ? user : undefined
    }

    const u: User | undefined = queryUser(1)
    if (typeof u === 'undefined') {
        console.log('no user found')
    } else {
        printUserInfo(u)
    }
}


{
    /**
     * 变量声明
     */
    {
        let str = '1'
        let str2: number = <number><any>str
        let str3: number = str as any as number
    }


    {
        let global = 11
        class Numbers {
            num_val = 12
            static sval = 10
        }
    }
}

//条件语句
{
    let grade: string = 'A'
    switch (grade) {
        case 'A':
            console.log('A')
            break
        case 'B':
            console.log('B')
            break
        default:
            console.log('default')
            break
    }
}

{
    /**
     * 遍历
     */
    let someArray = [1, "string", false];
    for (let each of someArray) {
        console.log(each)
    }

    someArray.forEach((val) => {
        console.log(val)
    })

    someArray.every((val) => {
        console.log(val)
        if (val === 'string') {
            return false
        }
        return true
    })
}
console.log('============================>function')
{
    /**
     * 函数
     */
    function buildName(firstname: string, lastname?: string) {
        if (lastname) {
            return `${firstname} ${lastname}`
        }
        return firstname
    }

    function defaultParam(name: string = 'gf') {
        console.log(name)
    }
    defaultParam()
    defaultParam('afei')

    function moreParam(name: string = 'gf', ...moreParams: string[]) {
        console.log(name)
        console.log(moreParams)
    }

    moreParam()
    moreParam('fei', 'a', 'b')
}