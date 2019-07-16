export const ADD_TASK = 'ADD_TASK';
export const SELECT_TASK = 'SELECT_TASK';

export function selectTask(task) {
    return {
        type: SELECT_TASK,
        paylod: task
    }
}

export const addTask = (text) => {
    return {
        type: ADD_TASK,
        text
    }
}