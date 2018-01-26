export default class TasksRepository {
  constructor(storage) {
    this.storage = storage;
  }

  save(task) {
    this.storage.setItem('1', task);
  }
}
