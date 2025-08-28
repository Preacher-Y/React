import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type todoListType = {
    id: number,
    task: string,
    completed: boolean
}


const todoListSlice = createSlice({
    name: 'todoList',
    initialState: [] as todoListType[] ,
    reducers:{
        addTodo:(state,action:PayloadAction<todoListType>)=>{
            state.push(action.payload)
        },
        toggleTodo:(state,action:PayloadAction<number>)=>{
            const todo = state.find(todo => todo.id === action.payload)
            if(todo){
                todo.completed = !todo.completed
            }
        },
        deleteTodo:(state,action:PayloadAction<number>)=>{
            return state.filter(todo => todo.id !== action.payload)
        },
        deleteAll: ()=>{
            return []
        },
        compeleteAll:(state)=>{
            if(state.every(todo => todo.completed)) return state.map(todo => ({...todo, completed: false}))
            return state.map(todo => ({...todo, completed: true}))
        }
    }
})

export const {addTodo, toggleTodo, deleteTodo, deleteAll, compeleteAll} = todoListSlice.actions
export default todoListSlice.reducer