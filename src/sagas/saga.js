import { ADD_TASK } from "../actions";
import { ADD_TASK_ASYNC } from "../actions";
import { delay, takeLatest, put } from 'redux-saga/effects';


let nextId = 0;
function* addTaskAsync() {
    yield delay(4000);
    yield put({type: ADD_TASK_ASYNC, id: nextId++, text: 'params.text'});
}

export function* watchTaskAdd() {
    yield takeLatest(ADD_TASK, addTaskAsync)
}