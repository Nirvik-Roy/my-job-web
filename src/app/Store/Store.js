import { configureStore } from "@reduxjs/toolkit";
import JobSlice from './Slices/JobsSlice'
const Store = configureStore({
    reducer:{
        job:JobSlice
    }
})

export default Store;