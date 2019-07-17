export const ADD_TASK = 'ADD_TASK';
export const SELECT_TASK = 'SELECT_TASK';

export function selectTask(task) {
    return {
        type: SELECT_TASK,
        paylod: task
    }
}
let nextId = 0;
export const addTask = (text) => {
    return {
        id: nextId++,
        text,
        type: ADD_TASK
    }
}