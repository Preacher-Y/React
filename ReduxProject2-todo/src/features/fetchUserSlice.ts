
import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'

type User = {
  id: number
  name: string
  username: string
  email: string
  // add fields you care about
}

type Rejected = string // the payload type you’ll pass to rejectWithValue

export const fetchUser = createAsyncThunk<
  User,           // ✅ return type on success (action.payload in fulfilled)
  number,         // ✅ arg type: dispatch(fetchUser(1)) -> number
  { rejectValue: Rejected }  // ✅ payload type when rejected via rejectWithValue
>(
  'user/fetchUser',
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      if (!res.ok) {
        return thunkAPI.rejectWithValue(`Request failed: ${res.status}`)
      }
      const data = (await res.json()) as User
      return data
    } catch (err) {
      // turn unknown error into a readable string for the UI
      const message =
        err instanceof Error ? err.message : 'Network error'
      return thunkAPI.rejectWithValue(message)
    }
  }
)


export type UserState = {
  data: User | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: UserState = { data: null, status: 'idle', error: null }

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed'
        // If you used rejectWithValue, it lands in action.payload; else use action.error.message
        state.error = (action.payload as Rejected) ?? action.error.message ?? 'Unknown error'
      })
  }
})

export default userSlice.reducer
