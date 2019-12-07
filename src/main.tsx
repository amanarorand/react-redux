import React from 'react';
import { Todo } from './redux/model';
import { store } from './redux/store';
import { setAddToDoAction } from './redux/actions';
interface IMainComponentState {
    Todos: Todo[]
}
export class MainComponent extends React.Component<{}, IMainComponentState> {
    state = { Todos: store.getState().todos as Todo[] };
    public componentWillMount() {
        store.subscribe(() => {
            this.setState({ Todos: store.getState().todos })
        })

    }

    public render(): React.ReactNode {
        return (<div>Main Component
            <div><button onClick={this._onTitleAdd}>Add title</button></div>
            <ul>
                {this.state.Todos.map((item: Todo) => {
                    return <li>{item.Title}</li>;
                })
                }
            </ul>
        </div>);
    }

    private _onTitleAdd = () => {
        store.dispatch(setAddToDoAction({ Title: Math.random().toString() }))
    }
}
