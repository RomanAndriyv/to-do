import React, { Component } from "react";
import TodoList from "./containers/todo-list";
import AddTask from "./containers/add-task";
import "./app.css";

class Todo extends Component {
    constructor(props){
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(key) {
        let filteredItems = this.state.tasks.filter((item) => {
            return (item.key !== key)
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="todoListMain">
                <AddTask />
                <TodoList />
            </div>
        );
    }
}

export default Todo;