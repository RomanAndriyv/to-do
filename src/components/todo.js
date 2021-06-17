import React from "react";
import TodoListConnnected from "../containers/todo-list";
import AddTask from "../containers/add-task";
import ClearTasks from "../containers/clear";
import "./todo.css";

const Todo = () => (
    <div className="todoListMain">
        <AddTask />
        <TodoListConnnected />
        <ClearTasks />
    </div>
);

export default Todo;