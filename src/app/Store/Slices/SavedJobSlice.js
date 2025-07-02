const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


export const SavedJobs = createAsyncThunk('SavedJobs',async(job_id,{getState})=>{
    const GetJobsData = getState();
    // Find Method will return a object//
    return GetJobsData.job.jobs.find(e=>e.id === job_id._id) 
    
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
        state.isLoading=false;
        const ElementExists = state.saved.findIndex(e=>e.id === action.payload.id)
        if(ElementExists > -1){
          state.saved.splice(ElementExists,1);
        }else{
          state.saved.push(action.payload);
        }
        const idExists = state.id.find(e=>e == action.payload.id)
        const idIndex = state.id.findIndex(e=>e == action.payload.id)
        if(idExists){
          state.id.splice(idIndex,1)
        }else{
          state.id.push(action.payload.id)
        }
        
      })
      builder.addCase(SavedJobs.rejected,(state,error)=>{
         state.isError=true;
         state.isLoading=false,
         console.log('error occured',error)
      })
    }
})

export default SavedJobSlice.reducer