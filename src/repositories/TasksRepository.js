let store = require('store');

let cName = 'tasks';
export default class TasksRepository {
  static saveAll(items) {
    store.set(cName, items);
  }

  static getAll() {
    return store.get(cName) || []
  }
}
