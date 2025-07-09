'use client'

import './FindJob.css'
import '../../(Home)/Home.css'
import cross from '../../Assets/Images/fi_x-circle.png'
import Image from 'next/image'
import Jobs from '@/app/(Home)/Jobs'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const page = () => {
    const data = useSelector((state) => state.job);
    const [jobsPerpage,setjobsPerpage]=useState(12);
    const [clickedPagination,setClickedPagination]=useState()
    
    const [paginations,setPaginations]=useState();
    useEffect(()=>{
        if(data){
            setPaginations(Array(data.jobs.length / jobsPerpage).fill(null))
            setClickedPagination(jobsPerpage)
        }
    },[data,jobsPerpage])

    const PerpageFunc = (e) =>{
       if(e.target.value == 12){
        setjobsPerpage(12)
       }else if(e.target.value == 6){
        setjobsPerpage(6)
       }else{
        setjobsPerpage(3)
       }
    }
    return (
        <>
            <div style={{
                background: '#f1f2f4',
                padding: "20px 0px",
            }}>
                <div className='universal_container'>
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: "center",
                    }}>
                        <p style={{
                            fontSize: "15px",
                            fontWeight: '500'
                        }}>Find Job</p>
                        <p style={{
                            fontSize: '14px'
                        }}><span style={{
                            color: '#585858'
                        }}>Home</span> / Find Job</p>
                    </div>

                    <div className='find_job_inputs_wrapper'>
                        <div className='find_job_input'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input placeholder='Job Title,keyword...' type='text' />
                        </div>

                        <select>
                            <option>Select Location</option>
                        </select>
                        <select>
                            <option>Select Category</option>
                        </select>
                        <button>Find Job</button>
                    </div>
                </div>

            </div>

            <div className='universal_container' style={{
                paddingBottom: "50px"
            }}>
                <div className='selected_filter_wrapper' style={{
                    display: "flex",
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: '20px'
                }}>
                    <div className='selected_filter_1' style={{
                        display: 'flex',
                        columnGap: '10px',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            padding: '7px 10px',
                            borderRadius: '25px',
                            fontSize: '13px',
                            background: '#f1f2f4',
                            width: 'fit-content',
                            display: 'flex',
                            justifyContent: "space-between",
                            alignItems: "center",
                            columnGap: '10px'
                        }}>
                            <p style={{
                                color: '#585858'
                            }}>Design</p>
                            <Image style={{
                                width: '15px',
                                height: '15px',
                                cursor: 'pointer'
                            }} src={cross} alt='cross' />
                        </div>


                        <div style={{
                            padding: '7px 10px',
                            borderRadius: '25px',
                            fontSize: '13px',
                            background: '#f1f2f4',
                            width: 'fit-content',
                            display: 'flex',
                            justifyContent: "space-between",
                            alignItems: "center",
                            columnGap: '10px'
                        }}>
                            <p style={{
                                color: '#585858'
                            }}>New York</p>
                            <Image style={{
                                width: '15px',
                                height: '15px',
                                cursor: 'pointer'
                            }} src={cross} alt='cross' />
                        </div>
                    </div>
                    <div className='selected_filter_2'>
                        <select>
                            <option>Latest</option>
                        </select>
                        <select onChange={PerpageFunc}>
                            <option value={12}>12 per page </option>
                            <option value={6}>6 per page </option>
                            <option value={3}>3 per page </option>
                        </select>
                    </div>
                </div>
                <Jobs clickedPagination={clickedPagination} findJob={true} jobsPerpage={jobsPerpage} />

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    columnGap: '10px',
                    marginTop: '30px'
                }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        color: '#236bc0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: "center",
                        fontSize: '15px',
                        background: '#e7effa'
                    }}><i className="fa-solid fa-arrow-left"></i></div>
                    <div style={{
                        width:'270px',
                        display:'flex',
                        alignItems:'center',
                        columnGap:'5px',
                        overflow:'auto'
                    }}>
                    {paginations?.map((e, i) => {
                        return (
                            <div onClick={(()=>setClickedPagination(i+jobsPerpage))} className='pagi_number' key={i} style={{
                                width: '40px',
                                minWidth:"40px",
                                height: '40px',
                                borderRadius: '50%',
                                color: '#fff',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: "center",
                                fontSize: '12px',
                                background: '#0b63d3',
                            }}>{i+1}</div>

                        )
                    })}
                    </div>


                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        color: '#236bc0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: "center",
                        fontSize: '15px',
                        background: '#e7effa'
                    }}><i className="fa-solid fa-arrow-right"></i></div>
                </div>
            </div>
        </>
    )
}

export default page