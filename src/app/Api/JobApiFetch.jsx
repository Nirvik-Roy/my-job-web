'use client'
import {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { fetchJobs } from '../Store/Slices/JobsSlice'
import {FilterJobs} from '../Store/Slices/JobFLiterSlice'
const JobApiFetch = () => {
    const dispatch = useDispatch();
    const data = useSelector((state)=>state.job);
    useEffect(()=>{
    dispatch(fetchJobs())

    },[])
  return null;
}

export default JobApiFetch