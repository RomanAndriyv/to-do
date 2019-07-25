export const ADD_TASK = 'ADD_TASK';
export const ADD_TASK_ASYNC = 'ADD_TASK_ASYNC';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = (text) => {
    return {
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