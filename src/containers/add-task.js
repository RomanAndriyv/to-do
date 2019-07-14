import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_TASK } from "../actions";

class AddTask extends Component {
    constructor(props){
        super(props);

        this.addItem = this.addItem.bind(this);
    }

    addItem(e){
        e.preventDefault();

        if (this._inputElement.trim !== "") {
            this.props.addTask(this._inputElement.value);
            this._inputElement.value = "";
        }
    }

    render() {
        return (   
            <div className="header">
                <form onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement = a}
                            placeholder="enter task">
                    </input>
                    <button type="submit">add</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (text) => dispatch({type: ADD_TASK, text})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);