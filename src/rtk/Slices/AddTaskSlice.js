import { createSlice } from "@reduxjs/toolkit";

export const AddTaskSlice = createSlice({
    name: "task",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addTask } = AddTaskSlice.actions;
export default AddTaskSlice.reducer;