import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './item/item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoListService } from './todo-list.service';
import { TodoListStorageService } from './todo-list-storage.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, InputComponent, ItemComponent, ListManagerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TodoListService, TodoListStorageService]
})
export class AppModule { }
