import { createSlice } from "@reduxjs/toolkit";

export const DoneTaskSlice = createSlice({
    name: "done task",
    initialState: [],
    reducers: {
        doneTask: (state, action) => {
            state.push(action.payload);
        }, deleteDoneTask: (state, action) => {
            return state.filter((state) => state.title !== action.payload.title);
        }
    }
})

export const { doneTask, deleteDoneTask } = DoneTaskSlice.actions;
export default DoneTaskSlice.reducer;
