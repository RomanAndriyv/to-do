export const ADD_TASK = 'ADD_TASK';
export const ADD_TASK_ASYNC = 'ADD_TASK_ASYNC';
export const DELETE_TASK = 'DELETE_TASK';
export const DELETE_ALL = 'DELETE_ALL';

let nextId = 0;
export const addTask = (text) => {
    return {
        id: nextId++,
        text,
        type: ADD_TASK
    }
}
export function deleteTask(id) {
    return {
        id,
        type: DELETE_TASK,
    }
}
export function deleteAll() {
    return {
        type: DELETE_ALL,
    }
}