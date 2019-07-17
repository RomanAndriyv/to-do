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
        default:
            return state;
    }
};

export default todos;