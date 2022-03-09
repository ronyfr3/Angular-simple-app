import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../redux/models/Todo';
import { Store } from '@ngrx/store';
import { TodoAdd } from '../../../redux/actions/todo.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  constructor(private store: Store<{ todos: Todo[] }>) {}

  AddTodo(todo: String) {
    const newTodo = new Todo();
    newTodo.title = todo;
    this.store.dispatch(new TodoAdd(newTodo));
  }

  ngOnInit(): void {}
}
