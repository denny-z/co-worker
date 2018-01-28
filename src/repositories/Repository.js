let store = require('store');

export default class Repository {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }

  save(item) {
    store.set(this.collectionName, this.getAll().concat(item));
  }

  rewriteAll(items) {
    store.set(this.collectionName, items);
  }

  getAll() {
    return store.get(this.collectionName) || []
  }
}
