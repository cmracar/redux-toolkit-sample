import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../configuration";

const initialState = {
    users: [],
    usersPosts: []
}

export const getAllUsers = createAsyncThunk(
    "posts/getAllUsers",
    async () => {
        const response = await axios.get(`${baseURL}/users`);
        return response.data;
    }
);

export const getUsersPosts = createAsyncThunk(
    "posts/getUserPosts",
    async (id) => {
        const response = await axios.get(`${baseURL}/posts?userId=${id}`);
        return response.data;
    }
);


export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
        },
        [getUsersPosts.fulfilled]: (state, action) => {
            state.usersPosts = action.payload;
        }
    }
})


const { reducer } = userSlice;
export default reducer;