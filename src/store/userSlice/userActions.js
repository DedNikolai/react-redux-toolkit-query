import { createAsyncThunk } from "@reduxjs/toolkit"

const fetchUserById = (userId) => {
    console.log(userId)
    return new Promise((resolve) => {
        setTimeout(() => resolve({id: userId, name: 'Pupkin'}), 3000)
    })
} 


export const getUserById = createAsyncThunk('users/fetchById', async (userId, thunkApi) => {
    
    try {
        const response = await fetchUserById(userId);
        return response;
    } catch(error) {
        thunkApi.rejectWithValue(error)
    }
    
})