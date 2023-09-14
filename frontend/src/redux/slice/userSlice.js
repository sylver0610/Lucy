import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash';
const userSlice = createSlice({
    name: 'user',
    initialState: {
        process: {
            isFetching: false,
            isLoading: false,
            error: false,
        },
        account: {
            user: null,
            token: null,
            isAuthenticated: false
        },


    },
    reducers: {
        getProcessStart: (state) => {
            state.process.isFetching = true;
        },
        getProcessSuccess: (state, action) => {
            state.process.isFetching = false;
            state.process.error = false;
            state.account = action.payload;

        },
        getProcessFailed: (state) => {
            state.process.error = true;
            state.process.isFetching = false;
            // state.account.isAuthenticated = false;
        },
        doLogInSuccess: (state, action) => {
            state.process.isFetching = false;
            state.process.error = false;
            state.account = action.payload;
            state.account.isAuthenticated = true;
        },
        getUser: (state, action) => {
            state.account = action.payload;
        },
        isLoading: (state) => {
            state.process.isLoading = true;
        },
        isNotLoading: (state) => {
            state.process.isLoading = false;
        },
        doLogOut: (state) => {
            state.process = {
                isFetching: false,
                isLoading: false,
                error: false,
            };
            state.account = {
                access_token: null,
                refresh_toke: null,
                username: null,
                email: null,
                role: null,
                image: null,
            };
            state.isAuthenticated = false;


        }
    }
})

export const {
    getProcessStart,
    getProcessSuccess,
    getProcessFailed,
    isLoading,
    isNotLoading,
    doLogInSuccess,
    doLogOut
} = userSlice.actions;

export default userSlice.reducer;