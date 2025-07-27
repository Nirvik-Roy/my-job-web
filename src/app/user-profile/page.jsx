'use client'
import axios from 'axios';
import { useState } from 'react';
import './user-profile.css'
import { toast } from 'react-toastify';
import Loader from '../Loader';
import FileUpload from './FileUpload';

const page = () => {
    const [image, setImage] = useState('');
    const [imageUrl, setImageUrl] = useState("")
    const [loader, setLoader] = useState(false)
    const [files, setfiles] = useState([]);
    const [filesUrl, setfilesUrl] = useState([])

    const HandleImageUpload = (e) => {
        if (e.target.files) {
            setImage(e.target.files[0])
        }
    }
    const HandleImageSubmit = async () => {
        if (image !== '') {
            setLoader(true)
            try {
                const formData = new FormData();
                formData.append('image', image)
                const res = await axios.post('http://localhost:5000/api/v1/upload-image', formData)
                if (res.data.success === true) {
                    toast.success(res.data?.message || 'Image Uploading...')
                    setImageUrl(res.data.payload?.imageUrl)
                }

            } catch (err) {
                console.log(err);
                toast.error(err.response?.data?.message || err.message || 'Image Upload Failed')
            } finally {
                setLoader(false);

            }
        } else {
            toast.error('No Image Selected')
        }
    }

    const HandleFileUpload = (e) => {
        if (e.target.files) {
            setfiles([...e.target.files]);
        }
    }
    const HandleFileSubmit = async () => {
        if (files.length > 0) {
            setLoader(true)
            const formData = new FormData();
            files.forEach((e) => {
                formData.append('documents', e)
            })
            try {
                const res = await axios.post('http://localhost:5000/api/v1/upload-document', formData)
                if (res?.data?.success) {
                    toast.success(res?.data?.message || 'File Uploading...');
                    setfilesUrl([...res.data.payload?.documents])
                }
            } catch (err) {
                toast.error(res.data.message || err.message || 'File Upload Failed')
            } finally {
                setLoader(false)
            }
        } else {
            toast.error('No Files Selected')
        }
    }

    return (
        <>
            {loader && <Loader />}
            <input onChange={HandleImageUpload} name='' type='file' />
            <button onClick={HandleImageSubmit}>Submit</button>
            {imageUrl && <img src={imageUrl} />}
            <FileUpload HandleFileSubmit={HandleFileSubmit} HandleFileUpload={HandleFileUpload} />
        </>
    )
}

export default page
