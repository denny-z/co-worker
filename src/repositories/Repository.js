let store = require('store');

export default class Repository {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }

  create(item) {
    item.id = Date.now() + this.randomNumber();
    return new Promise(
      (resolve) => {
        store.set(this.collectionName, this.__getAll().concat(item));
        resolve(item)
      }
    )
  }

  save(item) {
    return new Promise(
      (resolve) => {
        let allItems = this.__getAll();
        let realItem = allItems.find((i) => {return i.id === item.id});
        let realItemIndex = allItems.indexOf(realItem);
        allItems.splice(realItemIndex, 1)
        store.set(this.collectionName, allItems.concat([item]));
        resolve(true);
      }
    )
  }

  remove(item) {
    return new Promise(
      (resolve) => {
        let allItems = this.__getAll();
        let realItem = allItems.find((i) => {return i.id === item.id});
        let realItemIndex = allItems.indexOf(realItem);
        allItems.splice(realItemIndex, 1)
        store.set(this.collectionName, allItems);
        resolve(true);
      }
    )
  }

  getAll() {
    return new Promise(
      (resolve) => {
        resolve(this.__getAll())
      }
    )
  }

  __getAll() {
    return store.get(this.collectionName) || []
  }

  randomNumber() {
    return Math.round(Math.random()*100000 % 1000)
  }
}
