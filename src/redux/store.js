
import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./reducers/noteReducer";
import {todoReducer} from "./reducers/todoReducer";
import {notificationReducer} from './reducers/notificationReducer';



export const store = configureStore({
    reducer:{
        todoReducer,
        noteReducer,
        notificationReducer
    }
})

