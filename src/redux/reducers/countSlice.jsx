import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

export const sliceCount = createSlice({
    name: "COUNTER",
    initialState,
    reducers: {
        addCount(state, action) {
            state.count = state.count + action.payload;
        },
        takeCount(state, action) {
            state.count = state.count > 1 ? state.count - action.payload : 1;
        },
    },
});

export const { addCount, takeCount } = sliceCount.actions;
export default sliceCount.reducer;
