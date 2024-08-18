import { configureStore } from "@reduxjs/toolkit";
import sliceCount from "./reducers/countSlice";
import sliceToDo from "./reducers/todoSlice";

export const store = configureStore({
    reducer: {
        cash: sliceCount,
        main: sliceToDo,
    },
});
