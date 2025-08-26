import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {value:{name:'Yves Sheja N. M.', profession:'Full Stack Engineer', profile:'https://i.pravatar.cc/150?img=2',number:'+250 788 123 456', email:'ysheja@gmail.com', address:'Kigali, Rwanda'}},
    reducers:{
        Login:(state,action)=>{
            state.value=action.payload
        }
    }
})

export default userSlice.reducer