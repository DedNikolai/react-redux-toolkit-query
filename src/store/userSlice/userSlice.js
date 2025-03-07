import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./userActions";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        user: {},
        error: ''
    },
    reducers: {},
    extraReducers:  builder => {
        builder
            .addCase(getUserById.pending, state => {
                state,isLoading = true
            })
            .addCase(getUserById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(getUserById.rejected, (state, action) => {
                state.isLoading = false;
                state.user = {}
            })
    }
});

export const {reducer} = userSlice

