import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <div style={{position:'absolute',left:'0px',right:'0px'}}><Footer /></div> 
    </div>
  )
}
