import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Todo from "./todo";

const App = () => {
    return (
        <div>
            <Todo />
        </div>
    );
}

ReactDOM.render( <App />, document.querySelector("#container"));