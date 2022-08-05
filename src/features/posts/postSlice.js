import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const API_URL = "https://jsonplaceholder.typicode.com";

const initialState = {
    posts: [],
    users: [],
    isLoading: true,
}


export const getAllPosts = createAsyncThunk(
    "posts/getAllPosts",
    async () => {
        const response = await axios.get(`${API_URL}/posts`);
        return response.data;
    }
);


export const getAllUsers = createAsyncThunk(
    "posts/getAllUsers",
    async () => {
        const response = await axios.get(`${API_URL}/users`);
        return response.data;
    }
);

export const getUserPosts = createAsyncThunk(
    "posts/getUserPosts",
    async (id) => {
        const response = await axios.get(`${API_URL}/posts?userId=${id}`);
        return response.data;
    }
);


export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
        },
        [getUserPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
        }
    }
})


// https://github.com/bezkoder/redux-toolkit-example-crud-hooks/blob/master/src/slices/tutorials.js


export const { setLoading } = postSlice.actions;
const { reducer } = postSlice;
export default reducer;