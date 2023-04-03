import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from '../components/Home'
import Error from '../components/Error'



export default function Approuters() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            {/* <Route path='/' element={}/>
            <Route path='/' element={}/>
            <Route path='/' element={}/> */}
          </Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  )
}
