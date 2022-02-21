import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ["Model 3","Model Y","Model S","Model X"]
}

const carDataSlice = createSlice({
    name:"car",
    initialState,
    reducers:{}
})

export const selectCars = state => state.car.cars;

export default carDataSlice.reducer;