import { configureStore } from "@reduxjs/toolkit";
import carDataReducer from '../features/car/carDataSlice';

export const store = configureStore({
    reducer: {
        car:carDataReducer
    },
});