import React, { Component } from "react";
import { connect } from "react-redux";


class TodoList extends Component {
    createTasks = (item) => {
        return <li onClick={() => this.props.selectTask(item)}
                    key={item.id}>{item.text}</li>
    }

    delete = (key) => {
        this.props.delete(key);
    }

    render() {
        if (this.props.tasks.length === 0) {
            return <div>Trere are no tasks</div>;
        }

        return (
            <ul className="theList">
                {this.props.tasks.map(this.createTasks)}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.todos.tasks,
    }
}

const TodoListConnnected = connect(mapStateToProps)(TodoList);
export default TodoListConnnected;