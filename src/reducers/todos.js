import { ADD_TASK } from "../actions";

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            console.log(state);
        return {
            key: action.key,
            text: action.text
          }
      default:
        return state
    }
  };

export default todos;  