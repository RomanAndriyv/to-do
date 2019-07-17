import { ADD_TASK } from "../actions";

const initialState = {
    tasks: [],
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: action.id,
                    text: action.text,
                }],
            }
        default:
            return state;
    }
};

export default todos;