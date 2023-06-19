// npm test -- 'Singleton'

import singleton from './UserAPISingleton';
test('singleton is a Singleton', () => {
  expect(singleton.getInstance()).toBe(singleton.getInstance());
});
