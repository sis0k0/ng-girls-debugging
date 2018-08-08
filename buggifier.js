const { readFileSync, writeFileSync } = require('fs');

const readFile = (path) => {
  let buffer;
  try {
    buffer = readFileSync(path);
  } catch(e) {
    console.error(`Couldn't read ${path}!`);
  }

  return buffer.toString();
}

const bugFile = (path, searchText, replaceValue) => {
  const content = readFile(path);
  const newContent = content.replace(new RegExp(searchText, 'g'), replaceValue)
  writeFileSync(path, newContent, 'utf-8');
}

bugFile('./src/app/input/input.component.html', 'inputElement.value', 'inputElement');
bugFile('./src/app/item/item.component.ts', '!this.isComplete', 'true');
bugFile(
  './src/app/list-manager/list-manager.component.ts',
  'this.todoList = this.todoListService.getTodoList()',
  'this.todoListService.getTodoList()'
);

bugFile(
  './src/app/todo-list-storage.service.ts',
  'this.todoList.splice(this.findItemIndex(item), 1)',
  'this.todoList.splice(this.findItemIndex(item))'
);

