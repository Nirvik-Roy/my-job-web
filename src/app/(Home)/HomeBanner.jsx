'use client'
import React, { useState } from 'react'
import bannerImg from '../Assets/Images/Illustration.png'
import Image from 'next/image'
import search from '../Assets/Images/fi_search.png'
import location from '../Assets/Images/fi_map-pin.png'
import briefcase from '../Assets/Images/briefcase-duotone 1.png'
import building from '../Assets/Images/buildings-duotone 1.png'
import user from '../Assets/Images/users-duotone 1.png'
import { useDispatch } from 'react-redux'
import { FilterJobs } from '../Store/Slices/JobFLiterSlice'
const HomeBanner = () => {
    const dispatch = useDispatch();
    const [inputValue,setinputValue]=useState({
        title:'',
        location:''
    })
     
    const HandleChange = (e)=>{
       const {name,value}=e.target;
       setinputValue((prev)=>({
        ...prev,
        [name]:value
       }))
    }
    const HandleSubmit = () =>{
        dispatch(FilterJobs({query:inputValue}))
    }
  return (
    <>
        <div className='home_banner_main' style={{
            background:'#f7f7f7',
            paddingBottom:'50px',
            paddingTop:'100px'
        }}>
            <div className='universal_container '>

            <div className='home_banner_wrapper'>
            <div className='home_banner_left'>
                    <h1>Find a job that suits your interest & skills.</h1>
                    <p>Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.</p>
                    <div className='banner_job_title_wrapper'>
                        <div className='job_title_input_div'>
                            <input onChange={HandleChange} name='title' placeholder='Job tittle, Keyword...'/>
                            <Image src={search} alt='search'/>
                        </div>
                        <div className='location_wrapper'>
                            <input onChange={HandleChange} name='location' placeholder='Your Location'/>
                            <Image src={location} alt='location'/>
                            <div style={{
                                cursor:'pointer'
                            }} className='find_job_btn' onClick={(()=>{
                                HandleSubmit()
                            })}>Find Job</div>
                        </div>
                        
                    </div>
                    <p style={{
                        fontWeight:400,
                        fontSize:'13px',
                        color:'grey',
                        marginTop:'-10px'
                    }}><span style={{
                        fontWeight:500,
                        color:'black'
                    }}>Suggestion:</span>Designer,Programing,<span style={{color:'#1063cb',fontWeight:'600'}}> Digital Marketing,</span>Video, Animation.</p>
                 
                </div>
                <div className='home_banner_right'>
                    <Image src={bannerImg} alt='bannerImg'/>
                </div>
            </div>
               <div className='banner_cards_wrapper'>
                <div className='banner_card'>
                    <Image src={briefcase} alt='img'/>
                    <div>
                        <h5>1,75,324</h5>
                        <p>Live Job</p>
                    </div>
                </div>

                <div className='banner_card'>
                    <Image style={{
                        background:'#1063cb'
                    }} src={building} alt='img'/>
                    <div>
                        <h5>97,354</h5>
                        <p>Companies</p>
                    </div>
                </div>

                <div className='banner_card'>
                    <Image src={user} alt='img'/>
                    <div>
                        <h5>38,47,154</h5>
                        <p>Candidates</p>
                    </div>
                </div>
                <div className='banner_card'>
                    <Image src={briefcase} alt='img'/>
                    <div>
                        <h5>7,532</h5>
                        <p>New Jobs</p>
                    </div>
                </div>

               </div>
            </div>
        </div>
    </>
  )
}

export default HomeBanner