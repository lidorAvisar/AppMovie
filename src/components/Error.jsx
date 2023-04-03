import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Error() {
  return (
    <div>
      <div className='d-none d-xl-flex image-error  ' style={{ fontSize: '20px' }}></div>
        <div style={{ width: '', paddingLeft: '25px',textAlign:'center',position:'absolute',top:'70%' }} className=' col-10 col-md-11 col-lg-12'>
          <h4>the page you are looking for does not exist please go back to the main page . . .</h4>
          <Link to={'/'}><button className='btn bg-black text-white'>Back to home</button></Link> 
        </div>
    </div>
  )
}
