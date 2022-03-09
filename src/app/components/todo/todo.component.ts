import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../redux/models/Todo';
import { TodoRemove } from '../../../redux/actions/todo.actions';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Observable<Todo[]>;

  constructor(private store: Store<{ todos: Todo[] }>) {
    // store.pipe(select('todos')).subscribe((values) => (this.todos = values));
  }

  removeTodo(index: number) {
    this.store.dispatch(new TodoRemove(index));
  }
  ngOnInit(): void {}
}
