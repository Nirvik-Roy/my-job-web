'use client'

import React, { useState } from 'react'

const FileUpload = ({HandleFileUpload,files,HandleFileSubmit}) => {
   
    return (
        <>
            <input multiple onChange={HandleFileUpload} type='file' />
            <button onClick={HandleFileSubmit}>Submit</button>
           
        </>
    )
}

export default FileUpload
