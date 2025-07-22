
import axios from "axios";
import Cookies from 'js-cookie';
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const ResetPassword = createAsyncThunk('ResetPassword', async (dataParams) => {
    const jobToken = Cookies.get('my_job_token');
    if (jobToken) {
        try {
            const res = await axios.post('http://localhost:5000/api/v1/user/reset-password', dataParams.query, {
                headers: {
                    'Authorization': `${jobToken}`
                }
            });
            toast.success(res.data.message)
            return res.data
        } catch (err) {
            toast.error(err.response.data.message)
        }
    } else {
        toast.error('No Job Token is Found ');
    }
})

const ResetPasswordSlice = createSlice({
    name: 'resetPassword',
    initialState: {
        otp: null,
        isLoading: false,
        success: false,
    },
    extraReducers: (builder) => {
        builder.addCase(ResetPassword.pending, (state) => {
            state.isLoading = true
            console.log('...loading')
        })
        builder.addCase(ResetPassword.fulfilled, (state, action) => {
            console.log('Fullfiled', action.payload)
            state.otp = action.payload.payload.otp
            state.success = true,
            state.isLoading = true
            
            
        })
        builder.addCase(ResetPassword.rejected, (state, action) => {
            console.log('unexpected error occured', action.error)
        })
    }
})

export default ResetPasswordSlice.reducer; 