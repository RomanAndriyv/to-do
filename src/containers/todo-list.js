import React, { Component } from "react";
import { connect } from "react-redux";


class TodoList extends Component {
    // constructor(props) {
    //     super(props);

    //     //this.createTasks = this.createTasks.bind(this);
    // }

    createTasks = (item) => {
        return <li onClick={() => this.props.selectTask(item)}
                    key={item.id}>{item.text}</li>
    }

    delete = (key) => {
        this.props.delete(key);
    }

    render() {
        if (!this.props.tasks) {
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
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TodoList);