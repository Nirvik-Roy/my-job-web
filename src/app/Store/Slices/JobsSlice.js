import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchJobs = createAsyncThunk('fetchJobs',async () => {
    const response = await axios.get('https://jsonfakery.com/jobs');
    return response.data;
})
const JobSlice = createSlice({
    name:'job',
    initialState:{
        isloading:false,
        iserror:false,
        jobs:[],
    },
    extraReducers:(builder)=>{
       builder.addCase(fetchJobs.rejected,(state,action)=>{
        state.iserror=true
        console.log('Error Occured')
       })
       
       builder.addCase(fetchJobs.pending,(state,action)=>{
        state.isloading = true
       })

       builder.addCase(fetchJobs.fulfilled,(state,action)=>{
        state.isloading = false,
        state.jobs = action.payload
       });
    }

})

export default JobSlice.reducer;
