'use client'
import React, { useEffect, useState } from 'react'
import joblogo from '../Assets/Images/Employers Logo.png'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { SavedJobs } from '../Store/Slices/SavedJobSlice'
import { current } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axios from 'axios'
import Cookies from 'js-cookie'
const Jobs = ({ findJob, jobsPerpage, clickedPagination }) => {
    const data = useSelector((state) => state.job);
    const SavedJobsData = useSelector((state) => state.savedJob)
    const [jobs, setJobs] = useState([]);
    const [filterJobs, setFilterJobs] = useState([]);
    const [jobIndex, setJobIndex] = useState([])

    const [index, setIndex] = useState({
        startIndex: 0,
        endIndex: 12,
    })
    const dispatch = useDispatch()
    useEffect(() => {
        if (data) {
            setJobs(data.jobs);
            setFilterJobs(data.jobs)
        }
        switch (jobsPerpage) {
            case 12:
                setIndex({
                    startIndex: 0,
                    endIndex: 12
                })
                break;
            case 6:
                setIndex({
                    startIndex: 0,
                    endIndex: 6
                })
                break;
            case 3:
                setIndex({
                    startIndex: 0,
                    endIndex: 3
                })
        }
    }, [data, SavedJobsData, jobsPerpage]);


    const SavedJobFunc = (id) => {
        dispatch(SavedJobs({ _id: id }))
    }

    const LastPostIndex = jobsPerpage * clickedPagination;
    const firstPostIndex = LastPostIndex - jobsPerpage;

    const SendObj = async (e) => {
        const obj = {
            job_id: e.id,
            title: e.title,
            location: e.location,
            salary: e.salary_to,
            dateApplied: new Date()
        }
        setJobIndex([...jobIndex, e.id])
        const token = Cookies.get('my_job_token');
        if (token) {
            try {
                const res = await axios.post('http://localhost:5000/api/v1/job/apply-job', obj, {
                    headers: {
                        'Authorization': `${token}`
                    }
                })
                toast.success(res.data.message || 'Appiled Succesfully')
            } catch (err) {
                toast.error(err.response?.data?.message || err.message || 'Unexpected Error Occured')
            }
        }
    }

    return (
        <>
            {!findJob && <div className='job_list_wrapper'>
                {jobs.map((e, i) => {
                    if (i <= 7) {
                        return (
                            <div key={i} className='job_div_wrapper'>
                                <div className='job_div_left'>
                                    <Image src={joblogo} alt='job_logo' />
                                    <div className='job_title_wrapper'>
                                        <h4>{e.title} <span>Contract Base</span></h4>
                                        <div className='location_wrapper' style={{
                                            width: '100%',
                                            maxWidth: '100%',
                                            minWidth: '100%'
                                        }}>
                                            <h6><span><i className="fa-solid fa-location-dot"></i></span>{e.location.split(', ').slice(0, -1).join('')}</h6>
                                            <h6><i className="fa-solid fa-dollar-sign"></i>${e.salary_from.toString().slice(0, 2)}K - ${e.salary_to.toString().slice(0, 2)}K</h6>
                                            <h6><i className="fa-regular fa-calendar"></i>4 Days Remaining</h6>
                                        </div>
                                    </div>
                                </div>
                                <div style={{
                                    cursor: 'pointer'
                                }} className='job_div_right'>

                                    {SavedJobsData.id.includes(e.id) ? <i onClick={(() => { SavedJobFunc(e.id) })} className="fa-solid fa-bookmark"></i> : <i onClick={(() => { SavedJobFunc(e.id) })} className="fa-regular fa-bookmark"></i>}

                                    {jobIndex.includes(e.id) ? <button onClick={(() => {
                                        SendObj(e)
                                    })}>Applied<i className="fa-solid fa-arrow-right"></i></button> : <button onClick={(() => {
                                        SendObj(e)
                                    })}>Apply Now <i className="fa-solid fa-arrow-right"></i></button>}

                                </div>
                            </div>

                        )
                    }
                })}

            </div>}


            {findJob && <div className='job_list_wrapper'>
                {filterJobs.map((e, i) => {
                    if (i >= firstPostIndex && i < LastPostIndex) {
                        return (
                            <div key={i} className='job_div_wrapper'>
                                <div className='job_div_left'>
                                    <Image src={joblogo} alt='job_logo' />
                                    <div className='job_title_wrapper'>
                                        <h4>{e.title} <span>Contract Base</span></h4>
                                        <div className='location_wrapper' style={{
                                            width: '100%',
                                            maxWidth: '100%',
                                            minWidth: '100%'
                                        }}>
                                            <h6><span><i className="fa-solid fa-location-dot"></i></span>{e.location.split(', ').slice(0, -1).join('')}</h6>
                                            <h6><i className="fa-solid fa-dollar-sign"></i>${e.salary_from.toString().slice(0, 2)}K - ${e.salary_to.toString().slice(0, 2)}K</h6>
                                            <h6><i className="fa-regular fa-calendar"></i>4 Days Remaining</h6>
                                        </div>
                                    </div>
                                </div>
                                <div style={{
                                    cursor: 'pointer'
                                }} className='job_div_right'>

                                    {SavedJobsData.id.includes(e.id) ? <i onClick={(() => { SavedJobFunc(e.id) })} className="fa-solid fa-bookmark"></i> : <i onClick={(() => { SavedJobFunc(e.id) })} className="fa-regular fa-bookmark"></i>}

                                    <button>Apply Now <i className="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>

                        )
                    }


                })}

            </div>}
        </>
    )
}

export default Jobs