import { createSlice } from "@reduxjs/toolkit";

export const AddTaskSlice = createSlice({
    name: "task",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        }, deleteTask: (state, action) => {
            return state.filter((state) => state.title !== action.payload.title);
        }
    }
});

export const { addTask, deleteTask, clear } = AddTaskSlice.actions;
export default AddTaskSlice.reducer;