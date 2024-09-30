import { createAsyncThunk } from "@reduxjs/toolkit";

function fetch(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve({id: userId, name: 'Pupkin'}), 3000)
    })
}

export const getUser = createAsyncThunk('users/getUser', async(id, thunkApi) => {
    
    try {
        const response = await fetch(id)
        return response
    } catch(error) {
        thunkApi.rejectWithValue()
    }

})
