import { configureStore } from '@reduxjs/toolkit';
import Loading_slice from './Loading_slice';

export const store = configureStore({
    reducer: {
        Loading: Loading_slice
    },
})