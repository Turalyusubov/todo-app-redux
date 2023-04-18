import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTask(state, action) {
            state.todos.push(
                {
                    id: new Date().toISOString(),
                    text: action.payload.text,
                    isDone: false
                }
            )
        },
        removeTask(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toDoTask(state, action) {
            const doneTask = state.todos.find(todo => todo.id === action.payload.id)
            doneTask.isDone = !doneTask.isDone
        },
    }
})

export const { addTask, removeTask, toDoTask } = toDoSlice.actions

export default toDoSlice.reducer