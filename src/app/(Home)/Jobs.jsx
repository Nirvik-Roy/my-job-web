import React from 'react'
import joblogo from '../Assets/Images/Employers Logo.png'
import Image from 'next/image'
const Jobs = () => {
  return (
    <>
        <div className='job_list_wrapper'>
        {[1,2,3,4,5,6].map((e,i)=>{
            return(
               
                <div key={i} className='job_div_wrapper'>
                <div className='job_div_left'>
                    <Image src={joblogo} alt='job_logo'/>
                    <div className='job_title_wrapper'>
                        <h4>Senior UX Designer <span>Contract Base</span></h4>
                        <div className='location_wrapper'>
                            <h6><span><i className="fa-solid fa-location-dot"></i></span>Australia</h6>
                            <h6><i className="fa-solid fa-dollar-sign"></i>$30K-$35K</h6>
                            <h6><i className="fa-regular fa-calendar"></i>4 Days Remaining</h6>
                        </div>
                    </div>
                </div>
                <div className='job_div_right'>
                <i className="fa-regular fa-bookmark"></i>
                <button>Apply Now <i className="fa-solid fa-arrow-right"></i></button>
                </div>
               </div> 
             
            )
        })}
           
        </div>
    </>
  )
}

export default Jobs