import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import typingTestReducer from './typingTestSlice'

const store = configureStore({
  reducer: combineReducers({
    typingTest: typingTestReducer
  }),
  
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default store