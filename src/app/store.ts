import { configureStore } from "@reduxjs/toolkit"
// configureStore - this is a wrapper around basic createStore from 'redux'
// it automatically sets the store with the right defaults
// turns on react-dev-tools extension, adds thunk middleware, 
// also turns on some development checks for common mistakes like accidental mutations
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        // this will automatically call combineReducers, so that we end up with state.counter field in our state
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

