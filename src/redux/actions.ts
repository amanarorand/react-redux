import { Todo } from './model';
import { AppAction } from '../common/redux/redux';
const actionTypes = {
    SetTodo: 'SetTodo'
}

export const setAddToDoAction = (state: Todo): AppAction<Todo> => {
    return {
        type: actionTypes.SetTodo,
        payload: state
    }
}