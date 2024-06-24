import { configureStore } from "@reduxjs/toolkit";
import AddTaskSlice from "./Slices/AddTaskSlice";

export const store = configureStore({
    reducer: {
        addTask: AddTaskSlice,
    }
});

