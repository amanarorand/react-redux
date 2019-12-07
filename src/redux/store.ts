import { createStore, combineReducers } from 'redux';
import { todoReducers } from './reducers';
const appReducers = combineReducers({ todos: todoReducers });
export const store = createStore(appReducers)
