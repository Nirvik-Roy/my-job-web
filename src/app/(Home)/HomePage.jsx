import React from 'react'
import HomeBanner from './HomeBanner'
import './Home.css'
import PopularCategory from './PopularCategory'
import JobPioltWork from './JobPioltWork'
import MostPopularVaccines from './MostPopularVaccines'
const HomePage = () => {
  return (
    <>
        <HomeBanner/>
        <MostPopularVaccines/>
        <JobPioltWork/>
        <PopularCategory/>
     
       
    </>
  )
}

export default HomePage