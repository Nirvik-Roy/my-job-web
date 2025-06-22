import React from 'react'
import Companies from './Companies'

const TopCompanies = () => {
    return (
        <>
            <div className='top_companies_wrapper'>
                <div className='universal_container'>
                    <div className='popular_category_wrapper'>
                        <h1>Top companies</h1>
                        <div style={{
                            display: "flex",
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            columnGap: '5px'
                        }}>
                            <h6 style={{
                                padding: '10px 15px',
                                background: '#e8f0fb',
                                border: 'none'
                            }}> <i className="fa-solid fa-arrow-left"></i></h6>
                            <h6 style={{
                                padding: '10px 15px',
                                background: '#e8f0fb',
                                border: 'none'
                            }}><i className="fa-solid fa-arrow-right"></i></h6>
                        </div>

                    </div>
                    <Companies/>
                </div>
            </div>

        </>
    )
}

export default TopCompanies