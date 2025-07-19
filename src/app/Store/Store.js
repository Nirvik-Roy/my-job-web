import { configureStore } from "@reduxjs/toolkit";
import JobSlice from './Slices/JobsSlice'
import JobFilterSlice from './Slices/JobFLiterSlice'
import SavedJobSlice from './Slices/SavedJobSlice'
import ResetPasswordSlice from './Slices/ResetPasswordSlice'
const Store = configureStore({
    reducer:{
        job:JobSlice,
        jobFilter:JobFilterSlice,
        savedJob:SavedJobSlice,
        resetPassword:ResetPasswordSlice
    }
})

export default Store;