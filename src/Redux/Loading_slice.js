import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Loading: false,
}

export const Loading = createSlice({
    name: 'Loading',
    initialState,
    reducers: {
        LoadingStart: (state, action) => {
            state.Loading = true;
        },
        StopLoading: (state) => {
            state.Loading = false
        }
    },
})

export const { LoadingStart, StopLoading } = Loading.actions

export default Loading.reducer