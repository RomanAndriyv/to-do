import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteAll } from "../actions";

class ClearTasks extends Component {
    onDeleteAll() {
        this.props.deleteAll();
    }
    render() {
        return <div
            className="clear"
            onClick={() => this.onDeleteAll()}
        >Clear Tasks</div>
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteAll: (text) => dispatch(deleteAll(text))
    }
}

export default connect(undefined, mapDispatchToProps)(ClearTasks);
