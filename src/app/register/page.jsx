'use client'
import React, { useState } from 'react'
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
const page = () => {

    const [show, setShow] = useState(false);
    const [formData, setformData] = useState({
        fullName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        typeOfUser: 'Employer'
    })
    const dispatch = useDispatch()
    const navigate = useRouter()
    const HandleChange = (e) => {
        const { name, value } = e.target
        setformData({
            ...formData,
            [name]: value
        })

    }

    const HandleSubmit = async (e) => {
        e.preventDefault()
        const { fullName, userName, email, password, confirmPassword, typeOfUser } = formData
        if (fullName != '' && userName != '' && email != '' && password != '' && confirmPassword != '' && typeOfUser != '') {
          try{
            const response = await axios.post('http://localhost:5000/api/v1/user/register', formData);
            if ( response.data.success) {
                Cookies.set('userType', response.data.payload.typeOfUser);
                toast.success(`${response.data.message}... Redirecting...`)
                setTimeout(() => {
                    navigate.push('/login')
                }, 2000)
            } 
          }catch(err){
            toast.error(`${err.response.data.message}`)
          }
        } else {
            toast.error('plz enter all fields');
        }
    }
    return (
        <>
            <div className='login_wrapper'>
                <div className='login_left'>
                    <Image className='logo_img' alt='logo' src={logo} />
                    <div className='login_form'>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <div >
                                <h3>Create account</h3>
                                <p>Already have account? <span> Log In</span></p>
                            </div>
                            <select onChange={HandleChange} name='typeOfUser' style={{
                                width: 'fit-content',
                                padding: '10px 30px',
                                background: '#fff',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                outline: 'none'
                            }}>
                                <option value={'Employer'}>Employer</option>
                                <option value={'JobSeeker'}>JobSeeker</option>
                            </select>
                        </div>

                        <form className='login_wrapper_form'>
                            <input name='fullName' onChange={HandleChange} type='text' placeholder='Full Name' />
                            <input name='userName' onChange={HandleChange} type='text' placeholder='User Name' />
                            <input name='email' onChange={HandleChange} type='text' placeholder='Email address' />
                            <div style={{
                                width: "100%",
                                position: 'relative'
                            }}>
                                <input name='password' onChange={HandleChange} type={!show ? 'text' : 'password'} placeholder='Password' />
                                {show ? <i onClick={(() => setShow(false))} style={{
                                    fontSize: '15px',
                                    position: 'absolute',
                                    top: '16px',
                                    right: '15px',
                                    color: 'gray',
                                    cursor: "pointer"
                                }} className="fa-regular fa-eye"></i> : <i style={{
                                    fontSize: '15px',
                                    position: 'absolute',
                                    top: '16px',
                                    right: '15px',
                                    color: 'gray',
                                    cursor: "pointer"
                                }} onClick={(() => setShow(true))} className="fa-regular fa-eye-slash"></i>}
                            </div>
                            <div style={{
                                width: "100%",
                                position: 'relative'
                            }}>
                                <input name='confirmPassword' onChange={HandleChange} type={!show ? 'text' : 'password'} placeholder='Confirm Password' />
                                {show ? <i onClick={(() => setShow(false))} style={{
                                    fontSize: '15px',
                                    position: 'absolute',
                                    top: '16px',
                                    right: '15px',
                                    color: 'gray',
                                    cursor: "pointer"
                                }} className="fa-regular fa-eye"></i> : <i style={{
                                    fontSize: '15px',
                                    position: 'absolute',
                                    top: '16px',
                                    right: '15px',
                                    color: 'gray',
                                    cursor: "pointer"
                                }} onClick={(() => setShow(true))} className="fa-regular fa-eye-slash"></i>}
                            </div>
                            <div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    columnGap: '5px'
                                }}>
                                    <input style={{
                                        width: '17px',
                                        height: "17px"
                                    }} type='checkbox' />
                                    <p style={{
                                        fontSize: '13px'
                                    }}>I've read and agree with your Terms of Services</p>
                                </div>


                            </div>

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
                            }}>Create Account</button>
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