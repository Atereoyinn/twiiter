import { configureStore } from '@reduxjs/toolkit'
import { tweetReducer } from '../inputControl/TweetReducer'

export const store = configureStore({
  reducer: {
    tweet:tweetReducer
  },
})

