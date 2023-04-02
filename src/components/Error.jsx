import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default function Error() {
  return (
    <div>
         <div className='d-none d-xl-flex image-error text-white ' style={{ fontSize: '20px' }}></div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '90px', color: 'white', width: '', paddingLeft: '25px' }} className='col-10 col-md-11 col-lg-12'>
                <p>the page you are looking for does not exist please go back to the main page . . .</p>
            </div>
            <div>
             <Link to={'/'}><button>Back to home</button></Link> 
            </div>
    </div>
  )
}
