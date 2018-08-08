import { Injectable } from '@angular/core';

const storageName = 'aah_todo_list';
const defaultList = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' },
];

@Injectable()
export class TodoListStorageService {

  private todoList: Array<any>;

  constructor() {
    // this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultList;
    this.todoList = [...defaultList];
  }

  // get items
  get() {
    return [... this.todoList];
  }

  // add a new item
  post(item) {
    this.todoList.push(item);
    this.update();
    return this.get();
  }

  /**
   * Syncronize the local storage with the current list
   * @returns {any[]}
   */
  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));
    return this.get();
  }

  /**
   * find the index of an item in the array
   * @param item
   * @returns {number}
   */
  private findItemIndex(item) {
    return this.todoList.indexOf(item);
  }

  // update an item
  put(item, changes) {
    Object.assign(this.todoList[this.findItemIndex(item)], changes);
    return this.update();
  }

  // remove an item
  destroy(item) {
    this.todoList.splice(this.findItemIndex(item));
    return this.update();
  }
}
