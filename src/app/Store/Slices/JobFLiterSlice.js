import Store from "../Store";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const FilterJobs = createAsyncThunk('FilterJobs', async (filterParams, { getState }) => {
    const allJobsData = getState()
    return allJobsData.job.jobs.filter(e => e.title.toLowerCase().includes(filterParams.query.title.toLowerCase())
        && e.location.includes((filterParams.query.location)))
})

const JobFilterSlice = createSlice({
    name: 'jobFilter',
    initialState: {
        isLoading: false,
        isError: false,
        filterData: []
    },

    extraReducers: (builder) => {
        builder.addCase(FilterJobs.pending, (state) => {
            state.isLoading = true,
                console.log('....loading')
        })
        builder.addCase(FilterJobs.fulfilled, (state, action) => {
            state.filterData = action.payload;
            state.isLoading = false;
            console.log('fullfilled', action.payload)
        })
        builder.addCase(FilterJobs.rejected, (state, error) => {
            state.isError = true,
                console.log(error)
        })
    }

})

export default JobFilterSlice.reducer;
