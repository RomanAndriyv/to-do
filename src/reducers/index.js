import { combineReducers } from 'redux';
import TasksReducer from './reducer_tasks';
import todos from './todos';

const rootReducer = combineReducers({
    tasks: TasksReducer,
    todos
});

export default rootReducer;