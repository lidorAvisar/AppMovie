import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { HiOutlineSearch } from 'react-icons/hi';

export default function Navbar() {
  return (
    <div>

      <div  className='d-flex align-items-center justify-content-between px-2 px-md-3 px-lg-4 px-xl-5 pt-3'>
        <div className="col-3 col-lg-2">
          <Link style={{ textDecoration: 'none' }} to={'/'}><span className='appw'>AppWatch</span></Link>
        </div>

        <div className="input_search d-flex align-items-center justify-content-center ">
          <div className="input_search d-flex justify-content-center  col-md-11 col-lg-12 align-items-center" style={{marginBottom:'5px'}}>
            <button style={{ width: '53px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '25px 0px 0px 25px', border: 'none' }} className=" col-2 btn btn-danger">
              <span style={{ color: 'white', fontSize: '24px', display: 'flex' }}><HiOutlineSearch /></span>
            </button>
            <input style={{
              borderRadius: '0px 25px 25px 0px', width: '230px', height: '40px',
              backgroundColor:'',color:'white', border: 'solid 1px rgb(0,0,0)', fontSize: '19px',
              paddingLeft: '6px', paddingBottom: '5px',marginBottom:'1px'
            }}
             type="search"  placeholder='search somthing. . .' name="" id="" />
          </div>
        </div>
      </div>

    </div>
  )
}
