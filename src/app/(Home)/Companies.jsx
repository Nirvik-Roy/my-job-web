import React from 'react'
import logo from '../Assets/Images/Employers Logo.png'
import Image from 'next/image'
const Companies = () => {
  return (
    <>
        <div className='companies_Wrapper'>
        {[1,2,3,4,5,6,7,8].map((e,i)=>{
            return(
                <div className='company_div'>
                <div className='company_logo_Wrapper'>
                      <Image src={logo} alt='company_logo'/>
                      <div className='company_name'>
                        <h4>Dribble</h4>
                        <h6><i className="fa-solid fa-location-dot"></i>United States</h6>
                      </div>
                </div>
                <button>Open Postion</button>
            </div>
            )
        })}
          
        </div>
    </>
  )
}

export default Companies