import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type userType={
    name: string;
    profession: string;
    number: string;
    email: string;
    address: string;
    password?: string;
}

const initialValue:userType = {name:'', profession:'',number:'', email:'', address:'',password:''}

export const userSlice = createSlice({
    name: 'user',
    initialState: {value:initialValue},
    reducers:{
        login:(state,action:PayloadAction<userType>)=>{
            state.value=action.payload
        }
    }
})

export const {login} = userSlice.actions
export default userSlice.reducer