import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import "./index.css";
import Todo from "./todo";
import rootReducer from './reducers';

const store = createStore(rootReducer);
console.log(store.getState());

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <Todo />
            </Provider>
        </div>
    );
}

ReactDOM.render( <App />, document.querySelector("#container"));