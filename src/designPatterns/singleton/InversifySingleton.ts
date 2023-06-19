import 'reflect-metadata';
import { injectable, Container } from 'inversify';
interface UsersApiService {
  getUsers(): Promise<string[]>;
}

let TYPES = {
  UsersApiService: Symbol('UsersApiService'),
};

@injectable()
class UsersApiServiceImpl implements UsersApiService {
  getUsers(): Promise<string[]> {
    return Promise.resolve(['Alex', 'John', 'Sarah']);
  }
}

const container = new Container();
container
  .bind<UsersApiService>(TYPES.UsersApiService)
  .to(UsersApiServiceImpl)
  .inSingletonScope();

container
  .get<UsersApiService>(TYPES.UsersApiService)
  .getUsers()
  .then((res) => console.log(res));
