import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        toggleToFavorites: (state, {payload}) => {
            const isExist = state.some(item => item.id === payload.id);

            if (isExist) {
                return state.filter(item => item.id !== payload.id);
            } else {
                state.push(payload)
            }
        }
    }
});


export const {actions, reducer} = favoritesSlice;
