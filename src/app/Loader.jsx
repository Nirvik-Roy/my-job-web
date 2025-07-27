import React from 'react'

const Loader = () => {
  return (
    <>
      <div className='loader_wrapper'></div>
      <div style={{
        position:'fixed',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)'
      }}>
      <div className='loader'></div>
      </div>

    </>
  )
}

export default Loader
