import React, { Component } from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
                    key={item.key}>{item.text}</li>
    }

    delete(key) {
        this.props.delete(key);
        console.log(this);
        console.log(this.props);
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems;
        if (todoEntries) listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

export default TodoList;