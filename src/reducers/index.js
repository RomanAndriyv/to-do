import { combineReducers } from 'redux';
import TasksReducer from './reducer_tasks';
import todos from './todos';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    todos
});

export default rootReducer;