import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Post = {
  UserId: number;
  id:number;
  title: string;
};

type Rejected = string;

export const fetchPost = createAsyncThunk<Post,{rejectedValue:Rejected}>
(
    'fetchPost',
    async(_,thunkAPI)=>{
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!res.ok){
                return thunkAPI.rejectWithValue(`Request failed: ${res.status}`)
            }
            const data = (await  res.json()) as Post
            return data
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Network error'
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export type PostState = {
  data: Post | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: PostState = {data: null,status: 'idle',error: null}

const postSlicer = createSlice({
    name:'Post',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPost.pending,(state)=>{
            state.status = 'loading'
            state.error = null
        })
        .addCase(fetchPost.fulfilled,(state,action:PayloadAction<Post>)=>{
            state.status = 'succeeded'
            state.data = action.payload
        })
        .addCase(fetchPost.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = (action.payload as Rejected) ?? 'Unknown error'
        })
    }

})

export const postReducer = postSlicer.reducer