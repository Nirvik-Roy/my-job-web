import React from 'react'
import HomeBanner from './HomeBanner'
import './Home.css'
import PopularCategory from './PopularCategory'
import JobPioltWork from './JobPioltWork'
import MostPopularVaccines from './MostPopularVaccines'
import FeaturedJob from './FeaturedJob'
import TopCompanies from './TopCompanies'
import Candidate from './Candidate'
const HomePage = () => {
  return (
    <>
        <HomeBanner/>
        <MostPopularVaccines/>
        <JobPioltWork/>
        <PopularCategory/>
        <FeaturedJob/>
        <TopCompanies/>
        <Candidate/>
     
       
    </>
  )
}

export default HomePage