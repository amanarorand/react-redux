import { Todo } from './model';
import { setAddToDoAction } from './actions';
import { createReducer } from '../common/redux/redux';
export function addTodo(state: Todo[], action: ReturnType<typeof setAddToDoAction>):Todo[] {
    const newTodos = state.concat({
        Title: action.payload.Title
    })
    return newTodos;
}                             

export const todoReducers = createReducer([{ Title: 'title1' }], {
    SetTodo: addTodo
})
