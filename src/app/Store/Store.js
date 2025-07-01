import { configureStore } from "@reduxjs/toolkit";
import JobSlice from './Slices/JobsSlice'
import JobFilterSlice from './Slices/JobFLiterSlice'
import SavedJobSlice from './Slices/SavedJobSlice'
const Store = configureStore({
    reducer:{
        job:JobSlice,
        jobFilter:JobFilterSlice,
        savedJob:SavedJobSlice,
    }
})

export default Store;