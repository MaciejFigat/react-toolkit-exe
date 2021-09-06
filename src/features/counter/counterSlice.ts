import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 1,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // increment - we are not mutating the state, because reactToolkit uses immer and it tracks all mutations I'm trying to do, and it replaces them with safe immutable update
        incremented(state) {
            state.value++
        },
        // increment by fixed amount 
        amountAdded(state, action: PayloadAction<number>) {
            state.value += action.payload
        },
        // decrement
        // reset
    }
})

export const { incremented, amountAdded } = counterSlice.actions
export default counterSlice.reducer