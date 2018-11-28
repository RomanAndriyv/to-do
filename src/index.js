import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import "./index.css";
import Todo from "./components/todo";
import store from "./store";

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