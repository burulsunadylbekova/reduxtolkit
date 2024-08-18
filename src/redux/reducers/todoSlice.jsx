import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: JSON.parse(localStorage.getItem('todo')) || [],
};

export const sliceToDo = createSlice({
    name: "TODO",
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todo = [...state.todo, action.payload];
            localStorage.setItem('todo', JSON.stringify([...state.todo, action.payload]));
        },
        toDoDelete(state, action) {
           let addDelete= state.todo = state.todo.filter((el) => el.id!== action.payload);
            localStorage.setItem('todo', JSON.stringify(addDelete));
        }
    },
});

export const { addTodo, toDoDelete } = sliceToDo.actions;
export default sliceToDo.reducer;
