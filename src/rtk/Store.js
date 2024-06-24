import { configureStore } from "@reduxjs/toolkit";
import AddTaskSlice from "./Slices/AddTaskSlice";
import DoneTaskSlice from "./Slices/DoneTaskSlice";
import UserNameSlice from "./Slices/UserNameSlice";

export const store = configureStore({
    reducer: {
        addTask: AddTaskSlice,
        doneTask: DoneTaskSlice,
        userName: UserNameSlice
    }
});

