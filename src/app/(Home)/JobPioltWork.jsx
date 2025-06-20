import React from 'react'
import Image from 'next/image'
import process from '../Assets/Images/Process.png'
const JobPioltWork = () => {
  return (
    <>
        <div className='job_pilot_wrapper'>
            <div className='universal_container'>
                <h1>How jobpilot work</h1>
                <div className='process_img'>
                    <Image alt='process_img' src={process}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default JobPioltWork