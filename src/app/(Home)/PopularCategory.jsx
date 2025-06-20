import React from 'react'
import briefcase from '../Assets/Images/briefcase-duotone 1.png'
import Image from 'next/image'
import pen from '../Assets/Images/pen-nib-duotone 1.png'
import code from '../Assets/Images/code-duotone 1.png'
import mic from '../Assets/Images/megaphone-simple-duotone 1.png'
import monitor from '../Assets/Images/monitor-play-duotone 1.png'
import music from '../Assets/Images/music-notes-duotone 1.png'
import chart from '../Assets/Images/chart-bar-horizontal-duotone 1.png'
import medicine from '../Assets/Images/first-aid-kit-duotone 1.png'
import database from '../Assets/Images/database-duotone 1.png'
const PopularCategory = () => {
  return (
    <>
        <div className='pouplar_category_wrapper'>
            <div className='universal_container'>
                <div className='popular_category_wrapper'>
                    <h1>Popular category</h1>
                    <h6>View All <i class="fa-solid fa-arrow-right"></i></h6>
                </div>

                <div className='popular_category_box'>
                <div className='popular_card'>
                    <Image src={pen} alt='img'/>
                    <div>
                        <h5>Graphics & Design</h5>
                        <p>357 Open position</p>
                    </div>
                </div>


                <div className='popular_card'>
                    <Image src={code} alt='img'/>
                    <div>
                        <h5>Code & Programing</h5>
                        <p>312 Open position</p>
                    </div>
                </div>


                <div className='popular_card'>
                    <Image src={mic} alt='img'/>
                    <div>
                        <h5>Digital Marketing</h5>
                        <p>297 Open position</p>
                    </div>
                </div>


                <div className='popular_card'>
                    <Image src={monitor} alt='img'/>
                    <div>
                        <h5>Video & Animation</h5>
                        <p>247 Open position</p>
                    </div>
                </div>

                <div className='popular_card'>
                    <Image src={music} alt='img'/>
                    <div>
                        <h5>Music & Audio</h5>
                        <p>204 Open position</p>
                    </div>
                </div>


                <div className='popular_card'>
                    <Image src={chart} alt='img'/>
                    <div>
                        <h5>Account & Finance</h5>
                        <p>167 Open position</p>
                    </div>
                </div>


                <div className='popular_card'>
                    <Image src={medicine} alt='img'/>
                    <div>
                        <h5>Health & Care</h5>
                        <p>125 Open position</p>
                    </div>
                </div>


                <div className='popular_card'>
                    <Image src={database} alt='img'/>
                    <div>
                        <h5>Data & Science</h5>
                        <p>57 Open position</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PopularCategory