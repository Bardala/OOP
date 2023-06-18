import UserAPISingleton from "./designPatterns/singleton/UserAPISingleton"

// IIFE (immediately invoked function expression)
(async () => {
    const userAPISingleton = UserAPISingleton.getInstance()
    userAPISingleton.addUsers(['islam', 'ali'])
    console.log('group1', await userAPISingleton.getUsers())

    const userAPISingleton2 = UserAPISingleton.getInstance()
    userAPISingleton2.addUsers(['mona'])
    console.log('After adding Mona', await userAPISingleton.getUsers())
})()