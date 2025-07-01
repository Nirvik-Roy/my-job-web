'use client'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const MostPopularVaccines = () => {
   const data = useSelector((state)=>state.job);
   const [jobdata,setjobdata]=useState([])
   useEffect(()=>{
     if(data){
        setjobdata(data.jobs)
     }
   },[data])
    return (
        <>

            <div className='most_popular_wrapper'>
                <div className='universal_container'>
                    <h1>Most Popular Vacancies</h1>
                    <div className='vacanies_wrapper'>
                    { jobdata.map((e,i)=>{
                        if( i <= 16 && i >  0) {
                            return(
                            <div key={i} className='vacacines_div'>
                                   <h6>{e.title}</h6>
                                   <p>{i * 20},{i * 156} Open Positions</p>
                               </div>
                               )
                        }
                      
                    })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MostPopularVaccines