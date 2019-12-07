import { Action } from 'redux';
import { object } from 'prop-types';
//, U extends (T: T,f: AppAction<T>) => T
export interface IReducer<T,U> {
    [P: string]: (T: T, f: AppAction<U>) => T
}
export function createReducer<T,U>(initiaState: T, handlers: IReducer<T,U>) {
    return function (state = initiaState, action: any): T {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        }
        else {
            return state;
        }
    }
}



export interface AppAction<T> extends Action {
    payload: T
}
