import { ADD_TODO, CLEAR_COMPLETED_TODO, COMPLETE_ALL_TODO, COMPLETE_A_TODO, DELETE_TODO } from "./actionTypes"

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}
export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}
export const completeATodo = (payload) => {
    return {
        type: COMPLETE_A_TODO,
        payload
    }
}
export const completeAllTodo = (payload) => {
    return {
        type: COMPLETE_ALL_TODO,
        payload
    }
}
export const clearCompletedTodo = (payload) => {
    return {
        type: CLEAR_COMPLETED_TODO,
        payload
    }
}
