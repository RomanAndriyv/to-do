export const ADD_TASK = 'ADD_TASK';
export const SELECT_TASK = 'SELECT_TASK';

export function selectTask(task) {
    return {
        type: SELECT_TASK,
        paylod: task
    }
}

export const addTask = (text) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('items').add({text}).then(() => {
            dispatch({
                type: ADD_TASK,
                key: Date.now(),
                text
            })
        }).catch((err) => {
            dispatch({
                type: 'ADD_TASK_ERROR',
                err
            })
        });
    }
}