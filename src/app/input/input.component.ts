import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  title: string = 'My First Todo Title';

  @Output()
  submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() { 
  }

  ngOnInit() {
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
    this.submit.emit(newTitle);
  }

}