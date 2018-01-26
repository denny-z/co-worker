import TasksRepository from './TasksRepository';

it('could save an object', () => {
  let localStorageStub = new LocalStorageStub()
  let repo = new TasksRepository(localStorageStub);
  repo.save({name: 'some name'});
  expect(localStorageStub.__getItems().length).not.toEqual(0);
})

class LocalStorageStub {
  constructor() {
    this.items = {}
  }

  setItem(key, item) {
    this.items[key] = item
  }

  removeItem(key) {
    delete this.items[key]
  }

  getItem(key) {
    return this.items[key]
  }

  __getItems() {
    return this.items;
  }
}
