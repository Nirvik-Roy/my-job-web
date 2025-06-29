import { configureStore } from "@reduxjs/toolkit";
import JobSlice from './Slices/JobsSlice'
import JobFilterSlice from './Slices/JobFLiterSlice'
const Store = configureStore({
    reducer:{
        job:JobSlice,
        jobFilter:JobFilterSlice,
    }
})

export default Store;