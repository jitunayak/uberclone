import { configureStore } from '@reduxjs/toolkit'
import navReducer from './navSlice';

export const store = configureStore({
    reducer: navReducer,
})

