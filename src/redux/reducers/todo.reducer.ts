import { TodoActionTypes } from '../shared/enum/todo-action-types.enum';
import { ActionParent } from '../actions/todo.actions';
import { Todo } from '../models/Todo';

export const initialState: any= [
  {
    title:
      'https://www.coderus.com/wp-content/uploads/fly-images/996776/different-types-of-software-coderus-branded-image-1920x9999.jpg',
  },
  {
    title:
      'https://blog.planview.com/wp-content/uploads/2020/01/Top-6-Software-Development-Methodologies.jpg',
  },
  {
    title:
      'https://marvel-b1-cdn.bc0a.com/f00000000075552/www.perforce.com/sites/default/files/image/2019-06/software%20integrity%20blog.jpg',
  },
  { title: 'https://static.javatpoint.com/blog/images/what-is-software.png' },
];

export function TodoReducer(state = initialState, action: ActionParent) {
  switch (action.type) {
    case TodoActionTypes.Add:
      return [...state, action.payload];
    case TodoActionTypes.Remove:
      [...state.splice(action.payload, 1)]; //action.payload === index of the removed item
      return [...state];
    default:
      return state;
  }
}
