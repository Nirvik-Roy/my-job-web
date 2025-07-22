'use client'
import React, { useEffect, useState } from 'react'
import '../login/Login.css'
import image from '../Assets/Images/Image.png'
import logo from '../Assets/Images/Logo.png'
import Image from 'next/image'
import smallimg from '../Assets/Images/Frame 7 (1).png'
import smallimg2 from '../Assets/Images/Frame 7 (2).png'
import smallimg3 from '../Assets/Images/Frame 7 (3).png'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
const page = () => {
    const [formData, setformData] = useState({
        otp: '',
        newPassword: ''
    })
    const dispatch = useDispatch();
    const { success, otp } = useSelector(state => state.resetPassword)
    const navigate = useRouter()
    const HandleChange = (e) => {
        const { name, value } = e.target
        setformData({
            ...formData,
            [name]: value
        })
    }
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const jobToken = Cookies.get('my_job_token');
        if (jobToken) {
            try {
                const res = await axios.post('http://localhost:5000/api/v1/user/verify-otp', formData, {
                    headers: {
                        'Authorization': `${jobToken}`
                    }
                });
                toast.success(res.data.message)
                setTimeout(()=>{
                    navigate.push('/login')
                },2000)
                return res.data
            } catch (err) {
                toast.error(err.response.data.message)
            }
        } else {
            toast.error('No Job Token is Found ');
        }
    }
    return (
        <>
            <div className='login_wrapper'>
                <div className='login_left'>
                    <Image className='logo_img' alt='logo' src={logo} />
                    <div className='login_form'>
                        <h3>Verify Your Otp To Reset Password</h3>
                        {success && <p>Otp -  <span>{success && otp}</span></p>}
                        <p>Don’t have otp <span style={{
                            fontSize: '12px',
                            fontFamily: 'Poppins'
                        }}>Resend Otp</span></p>
                        <form className='login_wrapper_form'>
                            <input name='otp' onChange={HandleChange} type='text' placeholder='Enter Otp' />
                            <input name='newPassword' onChange={HandleChange} type='password' placeholder='Enter New Password' />

                            <button onClick={HandleSubmit} style={{
                                width: '100%',
                                background: '#0a65cd',
                                border: 'none',
                                padding: '15px 0px',
                                textAlign: 'center',
                                color: '#fff',
                                fontWeight: '600',
                                cursor: 'pointer',
                                fontSize: '17px',
                                borderRadius: '5px'
                            }}>Verify Otp</button>
                        </form>
                    </div>

                </div>
                <div className='login_right'>
                    <Image style={{
                        zIndex: "9"
                    }} className='logo_right_bg' alt='bg' src={image} />

                    <div style={{
                        width: '70%'
                    }} >
                        <h1 style={{
                            zIndex: '10',
                            position: 'relative',
                            color: '#fff'
                        }}>Over 1,75,324 candidates waiting for good employees.</h1>

                        <div style={{
                            marginTop: "40px",
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            columnGap: '20px',
                            paddingRight: '50px'
                        }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: 'center',
                                flexDirection: 'column',
                                rowGap: '5px',
                                width: 'fit-content'
                            }}>
                                <Image alt='smallimg' style={{
                                    width: '50px',
                                    height: 'auto',
                                    zIndex: '10',
                                    position: 'relative'
                                }} src={smallimg} />
                                <p style={{
                                    color: '#fff',
                                    fontWeight: "500",
                                    fontSize: '14px',
                                    position: 'relative',
                                    zIndex: '10',
                                }}>1,75,324</p>
                                <span style={{
                                    color: 'gray',
                                    position: 'relative',
                                    zIndex: '10',
                                    fontSize: '12px'
                                }}>Live Job</span>
                            </div>


                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: 'center',
                                flexDirection: 'column',
                                rowGap: '5px',
                                width: 'fit-content'
                            }}>
                                <Image alt='smallimg' style={{
                                    width: '50px',
                                    height: 'auto',
                                    zIndex: '10',
                                    position: 'relative'
                                }} src={smallimg2} />
                                <p style={{
                                    color: '#fff',
                                    fontWeight: "500",
                                    fontSize: '14px',
                                    position: 'relative',
                                    zIndex: '10',
                                }}>97,354</p>
                                <span style={{
                                    color: 'gray',
                                    position: 'relative',
                                    zIndex: '10',
                                    fontSize: '12px'
                                }}>Companies</span>
                            </div>



                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: 'center',
                                flexDirection: 'column',
                                rowGap: '5px',
                                width: 'fit-content'
                            }}>
                                <Image alt='smallimg' style={{
                                    width: '50px',
                                    height: 'auto',
                                    zIndex: '10',
                                    position: 'relative'
                                }} src={smallimg3} />
                                <p style={{
                                    color: '#fff',
                                    fontWeight: "500",
                                    fontSize: '14px',
                                    position: 'relative',
                                    zIndex: '10',
                                }}>7,532</p>
                                <span style={{
                                    color: 'gray',
                                    position: 'relative',
                                    zIndex: '10',
                                    fontSize: '12px'
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