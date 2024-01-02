import { ADD_TODO, CLEAR_COMPLETED_TODO, COMPLETE_ALL_TODO, COMPLETE_A_TODO, DELETE_TODO, INCOMPLETE_A_TODO } from "./actionTypes";

const initialTodoState = []

const todoReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const lastTodoId = state[state.length - 1]?.todoId || 0
            return [...state, { ...action.payload, todoId: lastTodoId + 1 }]

        case DELETE_TODO:
            return state.filter(todo => todo.todoId !== action.payload.todoId)

        case COMPLETE_A_TODO:
            return [...state].map(todo => {
                if (todo.todoId === action.payload.todoId) {
                    todo.status = "completed"
                }
                return { ...todo }
            })
        case INCOMPLETE_A_TODO:
            return [...state].map(todo => {
                if (todo.todoId === action.payload.todoId) {
                    todo.status = "pending"
                }
                return { ...todo }
            })
        case COMPLETE_ALL_TODO:
            return [...state].map(todo => todo.status = "completed")

        case CLEAR_COMPLETED_TODO:
            return [...state].filter(todo => todo.status !== "completed")

        default:
            break;
    }
}

export default todoReducer