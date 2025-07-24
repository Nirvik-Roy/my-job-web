import React from 'react'
import './dashboard.css'
import Link from 'next/link'
import Image from 'next/image'
import profileimg from '../Assets/Images/Ellipse 19.png'
const page = () => {
  return (
    <>
      <div style={{
        borderBottom: '1px solid #ccc'
      }}>
        <div className='universal_container dashboard_wrapper'>
          <div className='left_dashboard_sidebar'>
            <Link href={'/dashboard'} className='dashboard_links_wrapper'>
              <i className="fa-solid fa-layer-group"></i>
              <p>Overview</p>
            </Link>
            <Link className='dashboard_links_wrapper' href={'/'}>
              <i className="fa-solid fa-briefcase"></i>
              <p>Applied Jobs</p>
              <p></p>
            </Link>

            <Link className='dashboard_links_wrapper' href={'/'}>
              <i className="fa-regular fa-bookmark"></i>
              <p>Favorite Jobs</p>
            </Link>
            <Link className='dashboard_links_wrapper' href={'/'}>
              <i className="fa-solid fa-gear"></i>
              <p>Settings</p>
            </Link>
            <div style={{
              flex: '1'
            }} className='dashboard_links_wrapper' >
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
              <p>Log Out</p>
            </div>

          </div>
          <div className='right_dashboard_sidebar'>
            <h1>Hello, Esther Howard</h1>
            <h6>Here is your daily activities and job alerts</h6>
            <div className='dashboard_cards_wrapper'>
              <div className='dashboard_card'>
                <div>
                  <h5>589</h5>
                  <p>Applied jobs</p>
                </div>

                <i className="fa-solid fa-briefcase"></i>
              </div>


              <div className='dashboard_card'>
                <div>
                  <h5>238</h5>
                  <p>Favorite jobs</p>
                </div>

                <i className="fa-regular fa-bookmark"></i>
              </div>


              <div className='dashboard_card'>
                <div>
                  <h5>574</h5>
                  <p>Job Alerts</p>
                </div>

                <i className="fa-regular fa-bell"></i>
              </div>
            </div>

            <div className='profile_not_completed_wrapper'>
              <div className='profile_img_wrapper'>
                <Image src={profileimg} />
                <div>
                  <h4>Your profile editing is not completed.</h4>
                  <p>Complete your profile editing & build your custom Resume</p>
                </div>
              </div>

              <button>Edit Profile</button>
            </div>

            <div className='recently_applied_head'>
              <h5>Recently Applied</h5>
              <Link href={'/'}>View All</Link>
            </div>
            <table className='recently_table'>
               <thead>
                <tr>
                  <th>Job</th>
                  <th>Date Applied</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
               </thead>
            </table>
          </div>
        </div>
      </div>
      <p style={{
        color:'#505050',
        fontWeight:'500',
        padding:'10px 0px',
        textAlign:'center',
        fontSize:'13px'
      }}>@ 2025 MyJob - Job Portal. All rights Rserved</p>
    </>
  )
}

export default page