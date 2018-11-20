import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";

const App = () => {
    return (
        <div>
            <TodoList />
        </div>
    );
}

ReactDOM.render( <App />, document.querySelector("#container"));