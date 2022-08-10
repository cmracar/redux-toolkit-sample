import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../configuration";

const initialState = {
    posts: [],
}


export const getAllPosts = createAsyncThunk(
    "posts/getAllPosts",
    async () => {
        const response = await axios.get(`${baseURL}/posts`);
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
    }
})

const { reducer } = postSlice;
export default reducer;