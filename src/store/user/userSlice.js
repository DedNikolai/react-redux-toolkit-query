import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./userActions";


export const testSlice = createSlice({
    name: 'test',
    initialState: {
        value: null,
        isLoading: false
    },
    reducers: {},
    extraReducers:  (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false;
            })
        }
});

export default testSlice.reducer;