import Image from 'next/image'
import logo from '../../Assets/Images/Rectangle 43.png'
import './singleJob.css'
import '../../(Home)/Home.css'
import TopCompanies from '@/app/(Home)/TopCompanies'
const page = () => {
  return (
    <>
     <div className='single_job_wrapper universal_container'>
         <div className='single_job_head_wrapper'>
          <div className='single_job_head_left'>
            <Image className='company_logo_img' src={logo} alt='company_logo'/>
            <div className='company_details_div_wrapper'>
              <div style={{
                display:'flex',
                justifyContent:'flex-start',
                alignItems:'center',
                columnGap:'8px'
              }}>
                <h1 style={{
                  fontSize:'20px',
                  fontWeight:'500'
                }}>Senior UX Designer</h1>
                <p style={{
                  padding:'4px 10px',
                  background:'#e9f1fd',
                  borderRadius:'15px',
                  fontSize:'11px',
                  color:'#0066FF',
                  fontWeight:'500'
                }}>Full Time</p>
              </div>
            <div className='single_job_links_wrapper'>
              <div className='single_job_div1'>
              <i className="fa-solid fa-link"></i>
              <p>https://instagram.com</p>
              </div>

              <div className='single_job_div1'>
              <i className="fa-solid fa-phone"></i>
              <p>(406) 555-0120</p>
              </div>

              <div className='single_job_div1'>
              <i className="fa-solid fa-envelope"></i>
              <p>career@instagram.com</p>
              </div>
            </div>

            </div>
          </div>
          <div className='single_job_head_right'>
          <i className="fa-regular fa-bookmark"></i>
          <button>Apply Now</button>
          </div>
         </div>
         <div className='single_job_full_Details_wrapper'>
          <div className='single_job_details_left8956'>
            <h4>Job Description</h4>
            <p>Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellentesque eget maximus tellus. Duis et est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet arcu commodo sollicitudin. Integer finibus blandit condimentum. Vivamus sit amet ligula ullamcorper, pulvinar ante id, tristique erat. Quisque sit amet aliquam urna. Maecenas blandit felis id massa sodales finibus. Integer bibendum eu nulla eu sollicitudin. Sed lobortis diam tincidunt accumsan faucibus. Quisque blandit augue quis turpis auctor, dapibus euismod ante ultricies. Ut non felis lacinia turpis feugiat euismod at id magna. Sed ut orci arcu. Suspendisse sollicitudin faucibus aliquet.</p>

            <h4 style={{
              marginTop:'20px'
            }}>Qualifications</h4>
            <ul>
            {[1,2,3,4,5].map((e,i)=>{
              return(
                <>
                <li>Quisque semper gravida est et consectetur.</li>
                </>
              )
         
            })}

            </ul>
          </div>
          <div className='single_job_details_right7859'>
            <div className='job_overview_box_wrapper'>
              <h4>Job Overview</h4>
              <div className='job_overviews_boxes_wrapper'>
                <div className='job_overview_box_1'>
                <i className="fa-regular fa-calendar"></i>
                <p>Job Posted:</p>
                <small>14 June, 2021</small>
                </div>

                <div className='job_overview_box_1'>
                <i className="fa-regular fa-clock"></i>
                <p>Job Expire:</p>
                <small>14 July, 2021</small>
                </div>

                <div className='job_overview_box_1'>
                <i className="fa-solid fa-wallet"></i>
                <p>Sallery:</p>
                <small>40k - 50k/month</small>
                </div>


                <div className='job_overview_box_1'>
                <i className="fa-solid fa-location-dot"></i>
                <p>Location</p>
                <small>New York, USA</small>
                </div>


                <div className='job_overview_box_1'>
                <i className="fa-solid fa-briefcase"></i>
                <p>Job Type:</p>
                <small>FullTime</small>
                </div>


                <div className='job_overview_box_1'>
                <i className="fa-solid fa-briefcase"></i>
                <p>Is Remote</p>
                <small>No</small>
                </div>

              <button>Apply Now</button>
              </div>
            </div>
          </div>
         </div>
       
     </div>
     <TopCompanies/>
    </>
  )
}

export default page