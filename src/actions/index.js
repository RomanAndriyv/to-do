export const ADD_TASK = 'ADD_TASK';
export const SELECT_TASK = 'SELECT_TASK';

export function selectTask(task) {
    // console.log("task  ", task);
    return {
        type: SELECT_TASK,
        paylod: task
    }
}

export const addTask = (payload) => {
    return {
        type: ADD_TASK,
        key: Date.now(),
        text: payload
    }
}