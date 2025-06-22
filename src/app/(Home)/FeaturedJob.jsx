import React from 'react'
import Jobs from './Jobs'

const FeaturedJob = () => {
  return (
    <>
    <div className='featured_jobs_wrapper' style={{
        borderBottom:'1px solid #ccc'
    }}>
        <div className='universal_container'>
        <div className='popular_category_wrapper'>
                    <h1>Featured Jobs</h1>
                    <h6>View All <i className="fa-solid fa-arrow-right"></i></h6>
                </div>

                <Jobs/>
        </div>
    </div>
     
    </>
  )
}

export default FeaturedJob