import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    tweetReducer: (state) => state.value
  },
})

// Action creators are generated for each case reducer function
export const { tweetReducer } = tweetSlice.actions

export default tweetSlice.reducer