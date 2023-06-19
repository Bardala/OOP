export default class UserAPISingleton {
  private static instance: UserAPISingleton;
  private constructor() {}
  private static users: string[] = [];

  static getInstance() {
    if (!UserAPISingleton.instance)
      UserAPISingleton.instance = new UserAPISingleton();

    return UserAPISingleton.instance;
  }

  async getUsers(): Promise<string[]> {
    return Promise.resolve(UserAPISingleton.users);
  }
  addUsers(users: string[]): void {
    UserAPISingleton.users.push(...users);
  }
}

// IIFE (immediately invoked function expression)
// (async () => {
//     const users = UserAPISingleton.getInstance()
//     users.addUsers(['islam', 'ali'])
//     console.log('group1', await users.getUsers())

//     const users2 = UserAPISingleton.getInstance()
//     users2.addUsers(['mona'])
//     console.log('After adding Mona', await users.getUsers())
// })()

// async function main() {
//     const users = UserAPISingleton.getInstance()
//     users.addUsers(['islam', 'ali'])
//     console.log('group1', await users.getUsers())

//     const users2 = UserAPISingleton.getInstance()
//     users2.addUsers(['mona'])
//     console.log('After adding Mona', await users.getUsers())
// }

// main()
