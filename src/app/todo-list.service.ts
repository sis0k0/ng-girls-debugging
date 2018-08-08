import { Injectable } from '@angular/core';
import { TodoListStorageService } from './todo-list-storage.service';

@Injectable()
export class TodoListService {

  private todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  constructor(private storage: TodoListStorageService) { }

  getTodoList() {
    return this.storage.get();
  }

  addItem(item) {
    return this.storage.post(item);
  }

  removeItem(item) {
    return this.storage.destroy(item);
  }

}