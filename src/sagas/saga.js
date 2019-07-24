import { ADD_TASK } from "../actions";
import { ADD_TASK_ASYNC } from "../actions";
import { delay } from 'redux-saga';
import { takeEvery } from 'redux-saga';

function* addTaskAsync() {
    yield delay(4000);
    yield put({type: ADD_TASK_ASYNC})
}

export function* watchTaskAdd() {
    yield takeEvery(ADD_TASK, addTaskAsync)
}