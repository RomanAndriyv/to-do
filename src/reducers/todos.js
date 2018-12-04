import { ADD_TASK } from "../actions";

const todos = (state = [], action) => {
    switch (action.type) {
        // case ADD_TASK:
        //     console.log(action.text)
        //     return state
        case ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat(action.text),
            }
        case 'ADD_TASK_ERROR':
            console.log('create task error: ', action.err);
            return state
      default:
        return state
    }
};

export default todos;