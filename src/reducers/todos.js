import { ADD_TASK } from "../actions";

const todos = (state = {tasks:[]}, action) => {
    switch (action.type) {
        case ADD_TASK:
            console.log('add task');
            return {
                ...state,
                tasks: state.tasks.concat(action.text),
            }
        case 'ADD_TASK_ERROR':
            console.log('create task error: ', action.err);
            return state;
        default:
            return state;
    }
};

export default todos;