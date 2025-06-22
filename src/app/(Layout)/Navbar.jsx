import React from 'react'
import './Navbar.css'
import Link from 'next/link'
import logo from '../Assets/Images/Logo.png'
import Image from 'next/image'
import flag from '../Assets/Images/image 1.png'
import search from '../Assets/Images/fi_search.png'
const Navbar = () => {
    return (
        <>
            <div className='nav_bar_links_wrapper'>
                <div className='universal_container navbar_links_div'>
                    <div className='nav_link_left'>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/'}>Find Job</Link>
                        <Link href={'/'}>Employers</Link>
                        <Link href={'/'}>Candidates</Link>
                        <Link href={'/'}>Pricing Plans</Link>
                        <Link href={'/'}>Customer Supports</Link>
                    </div>
                    <div className='nav_link_right'>
                        <div className='nav_phone_wrapper'>
                            <i className="fa-solid fa-phone-volume"></i>
                            <p>+1-202-555-0178</p>
                        </div>

                        <Link href={'/'}>loremIpsum20023@gmail.com</Link>
                    </div>
                </div>
            </div>

            <div className='job_location_wrapper' >
                <div className='job_location_search_wrapper universal_container'>
                    <div className='logo_job_wrapper'>
                        <div style={{
                            width: '90px',
                            height: '32px'
                        }}>
                            <Image style={{
                                width: '100%',
                                height: '100%'
                            }} src={logo} alt='Company Logo' />
                        </div>

                        <div className='job_search_nav_wrapper'>
                            <div className='job_country'>
                                <Image src={flag} alt='Flag' />
                                India
                                <i className="fa-solid fa-angle-down"></i>
                            </div>
                            <div className='job_input_div_nav' style={{
                                position: 'relative'
                            }}>
                                <input placeholder='Job tittle, keyword, company' type='text'></input>
                                <Image style={{
                                    position: 'absolute',
                                    top: '0px',
                                    left: '10px',
                                    width: '17px',
                                    height: 'auto'
                                }} src={search} alt='Search_img' />
                            </div>

                        </div>
                    </div>
                    <div className='sign_in_post_jobs_btn_wrapper'>
                        <div className='sign_in_btn'>Sign In</div>
                        <div className='post_job_btn'>Post A Jobs</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar