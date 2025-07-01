const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


export const SavedJobs = createAsyncThunk('SavedJobs',async(job_id,{getState})=>{
    const GetJobsData = getState();
    return GetJobsData.job.jobs.filter(e=>e.id === job_id._id)
})
const SavedJobSlice = createSlice({
    name:'savedJob',
    initialState:{
        isLoading:true,
        isError:false,
        id:[],
        saved:[]
    },

    extraReducers:(builder)=>{
      builder.addCase(SavedJobs.pending,(state)=>{
        state.isLoading=true;
      })
      builder.addCase(SavedJobs.fulfilled,(state,action)=>{
        const ElementExists = state.saved.findIndex(e=>e.id === action.payload.id);
        if(ElementExists > -1){
            state.saved.splice(ElementExists,1)
            state.id.splice(ElementExists,1)
        }else{
            state.saved.push(action.payload);
            state.id.push(action.payload[0].id);
        }
        state.isLoading=false;
      })
      builder.addCase(SavedJobs.rejected,(state,error)=>{
         state.isError=true;
         state.isLoading=false,
         console.log('error occured',error)
      })
    }
})

export default SavedJobSlice.reducer