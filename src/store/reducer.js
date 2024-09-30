import { combineReducers } from "@reduxjs/toolkit";
import {reducer as countReducer} from './counterSlice/counterSlice';
import {reducer as favoritesReducer} from './favoritesSlice/favoritesSlice';
import { reducer as userReducer } from './userSlice/userSlice';

export const rootReducer = combineReducers({
    counter: countReducer,
    favorites: favoritesReducer,
    // user: userReducer
})