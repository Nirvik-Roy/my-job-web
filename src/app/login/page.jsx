'use client'
import React, { useState } from 'react'
import './Login.css'
import image from '../Assets/Images/Image.png'
import logo from '../Assets/Images/Logo.png'
import Image from 'next/image'
import smallimg from '../Assets/Images/Frame 7 (1).png'
import smallimg2 from '../Assets/Images/Frame 7 (2).png'
import smallimg3 from '../Assets/Images/Frame 7 (3).png'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
const page = () => {

    const [show,setShow]=useState(false);
    const [formData,setformData]=useState({
        email:'',
        password:''
    })
    const dispatch = useDispatch()

    const HandleChange = (e) =>{
        const {name,value}=e.target
        setformData({
            ...formData,
            [name]:value
        })
    }
    
    const HandleSubmit = async (e) =>{
        e.preventDefault()
       const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login',formData);
       if(response.data){
        
        Cookies.set('my_job_token',response.data.access_token)
       }else{
        console.log('error occured')
       }
    }
  return (
    <>
        <div className='login_wrapper'>
            <div className='login_left'>
                <Image className='logo_img' alt='logo' src={logo}/>
                <div className='login_form'>
                    <h3>Sign In</h3>
                    <p>Don’t have account <span>Create Account</span></p>
                    <form className='login_wrapper_form'>
                        <input name='email' onChange={HandleChange} type='text' placeholder='Email address'/>
                        <div style={{
                            width:"100%",
                            position:'relative'
                        }}>
                        <input name='password' onChange={HandleChange}  type={!show ?'text':'password'} placeholder='Password'/>
                      {show ?  <i onClick={(()=>setShow(false))} style={{
                            fontSize:'15px',
                            position:'absolute',
                            top:'16px',
                            right:'15px',
                            color:'gray',
                            cursor:"pointer"
                        }} className="fa-regular fa-eye"></i> : <i style={{
                            fontSize:'15px',
                            position:'absolute',
                            top:'16px',
                            right:'15px',
                            color:'gray',
                            cursor:"pointer"
                        }}  onClick={(()=>setShow(true))} className="fa-regular fa-eye-slash"></i>}
                        </div>
          
                        <div>
                            <div style={{
                                display:'flex',
                                justifyContent:'flex-start',
                                alignItems:'center',
                                columnGap:'5px'
                            }}>
                                <input style={{
                                    width:'17px',
                                    height:"17px"
                                }} type='checkbox'/>
                                <p style={{
                                    fontSize:'13px'
                                }}>Remember Me</p>
                            </div>

                           
                        </div>

                        <button onClick={HandleSubmit} style={{
                            width:'100%',
                            background:'#0a65cd',
                            border:'none',
                            padding:'15px 0px',
                            textAlign:'center',
                            color:'#fff',
                            fontWeight:'600',
                            cursor:'pointer',
                            fontSize:'17px',
                            borderRadius:'5px'
                        }}>Sign In</button>
                    </form>
                </div>
                  
            </div>
            <div className='login_right'>
                <Image style={{
                    zIndex:"9"
                }}  className='logo_right_bg' alt='bg' src={image}/>

                <div style={{
                    width:'70%'
                }} >
                    <h1 style={{
                    zIndex:'10',
                    position:'relative',
                    color:'#fff'
                }}>Over 1,75,324 candidates waiting for good employees.</h1>

                <div style={{
                    marginTop:"40px",
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                    columnGap:'20px',
                    paddingRight:'50px'
                }}>
                    <div style={{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:'center',
                        flexDirection:'column',
                        rowGap:'5px',
                        width:'fit-content'
                    }}>
                        <Image alt='smallimg' style={{
                            width:'50px',
                            height:'auto',
                            zIndex:'10',
                            position:'relative'
                        }}  src={smallimg}/>
                        <p style={{
                            color:'#fff',
                            fontWeight:"500",
                            fontSize:'14px',
                             position:'relative',
                            zIndex:'10',
                        }}>1,75,324</p>
                        <span style={{
                            color:'gray',
                            position:'relative',
                            zIndex:'10',
                            fontSize:'12px'
                        }}>Live Job</span>
                    </div>


                    <div style={{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:'center',
                        flexDirection:'column',
                        rowGap:'5px',
                        width:'fit-content'
                    }}>
                        <Image alt='smallimg' style={{
                            width:'50px',
                            height:'auto',
                            zIndex:'10',
                            position:'relative'
                        }}  src={smallimg2}/>
                        <p style={{
                            color:'#fff',
                            fontWeight:"500",
                            fontSize:'14px',
                             position:'relative',
                            zIndex:'10',
                        }}>97,354</p>
                        <span style={{
                            color:'gray',
                            position:'relative',
                            zIndex:'10',
                            fontSize:'12px'
                        }}>Companies</span>
                    </div>



                    <div style={{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:'center',
                        flexDirection:'column',
                        rowGap:'5px',
                        width:'fit-content'
                    }}>
                        <Image alt='smallimg' style={{
                            width:'50px',
                            height:'auto',
                            zIndex:'10',
                            position:'relative'
                        }}  src={smallimg3}/>
                        <p style={{
                            color:'#fff',
                            fontWeight:"500",
                            fontSize:'14px',
                             position:'relative',
                            zIndex:'10',
                        }}>7,532</p>
                        <span style={{
                            color:'gray',
                            position:'relative',
                            zIndex:'10',
                            fontSize:'12px'
                        }}>New Jobs</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default page