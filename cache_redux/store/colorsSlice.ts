import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const colorsSlice = createSlice({
    name: "colors",
    initialState: {
        value: "bg-black"
    },
    // initialState: "bg-black",
    reducers: {
        setColors: (state, action: PayloadAction<string>) => {
            state.value = action.payload
            // state = action.payload
        }
    }
})

export const {setColors} = colorsSlice.actions

export const colorsReducer = colorsSlice.reducer