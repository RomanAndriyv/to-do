import { ADD_TASK } from "../actions";

const initialState = {
    tasks: [],
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat({
                    id: state.tasks.length,
                    text: action.text,
                }),
            }
        case 'ADD_TASK_ERROR':
            console.log('create task error: ', action.err);
            return state;
        default:
            return state;
    }
};

export default todos;