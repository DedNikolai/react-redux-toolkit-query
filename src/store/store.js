import { configureStore } from '@reduxjs/toolkit';
import {reducer as countReducer} from './counterSlice/counterSlice';
import {reducer as favoritesReducer} from './favoritesSlice/favoritesSlice';
import testReducer from './user/userSlice';
import { api } from './api/api';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true
})

export const store = configureStore({ 
  reducer: { 
    counter: countReducer,
    favorites: favoritesReducer,
    test: testReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(api.middleware) 
      .concat(logger)
});