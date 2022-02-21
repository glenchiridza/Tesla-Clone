import { configureStore } from "@reduxjs/toolkit";
import {carDataReducer} from '../features/car/CarDataSlice';

export const store = configureStore({
    reducer: {
        car:carDataReducer
    },
});