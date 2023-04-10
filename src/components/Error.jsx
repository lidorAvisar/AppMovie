import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'

export default function Error() {
  const navigate = useNavigate();
  return (
    <div>

      <div className=' d-flex image-error justify-content-center' style={{ fontSize: '20px',height:'100vh' }}>
        <div style={{ paddingLeft: '25px', textAlign: 'center', position: 'absolute', top: '70%' }} className=' col-10 col-md-11 col-lg-12'>
          <h4>the page you are looking for does not exist please go back to the main page . . .</h4>
          <button onClick={(e) => { navigate(-1) }} className='btn btn-info  text-white mx-2'>Back</button>
          <Link to={'/'}><button className='btn btn-success  text-white'>Back to home</button></Link>
        </div>
      </div>

    </div>
  )
}
