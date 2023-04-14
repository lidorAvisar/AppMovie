import React, { useEffect, useState } from 'react'
import Carusel from './Carusel'
import axios from 'axios';
import { useLocation, useParams, Link, useNavigate } from 'react-router-dom';
import SearchInput from './SearchInput';
import './style.css'
import Select from 'react-select'

export default function Home() {

  const [data, setData] = useState([]);
  const [empty, setEmpty] = useState(false)
  const { searchData, searchYears } = useParams();
  const location = useLocation();
  const [yearsList, setYearsList] = useState([])
  const navigate = useNavigate();

  let getData = async () => {
    let { data } = await axios.get(`https://www.omdbapi.com/?s=${searchData ? searchData : 'avengers'}${searchYears ? '&y=' + searchYears : ''}&apikey=64dc74b3`);
    setData(data.Search);
    console.log(data.Search);
    setEmpty(data.Search? false : true)
  }

  useEffect(() => {
    getData();
  }, [location])

  useEffect(() => {
    let temp_ar = [];
    for (let index = 1950; index <= (new Date()).getFullYear(); index++) {
      temp_ar.push({
        label: index,
        value: index
      })
    }
    setYearsList(temp_ar)
  }, [])

  return (
    <div>
      <Carusel />

      <div className='d-flex justify-content-between align-items-center mb-5 my-1 my-lg-4'>
        <div className='d-none d-lg-flex list-unstyled text-white px-5 ms-5 col-lg-8 col-xl-9'>
          <h5 className=''>Top years:</h5>
          <p className='years_list px-3'><Link to={`/search/${searchData || "avengers"}/year/1989`}>1989</Link></p>
          <p className='years_list px-3'><Link to={`/search/${searchData || "avengers"}/year/1995`}>1995</Link></p>
          <p className='years_list px-3'><Link to={`/search/${searchData || "avengers"}/year/2000`}>2000</Link></p>
          <p className='years_list px-3'><Link to={`/search/${searchData || "avengers"}/year/2020`}>2020</Link></p>
          <p className='years_list px-3'><Link to={`/search/${searchData || "avengers"}/year/2021`}>2021</Link></p>
          <p className='years_list px-3'><Link to={`/search/${searchData || "avengers"}/year/2023`}>2023</Link></p>
        </div>
        <div className='container fs-6 col-5 col-lg-3 col-xl-2'>
          <Select onChange={item => {
            navigate(`/search/${searchData || "avengers"}/year/${item.value}`);
          }} options={yearsList} className='text-center'>
          </Select>
        </div>
        <div className='my-3 col-7 col-md-6 m'><SearchInput /></div>
      </div>
      <hr className='mx-5' style={{ color: 'white' }} />

      {empty && <div style={{ height: '400px' }}> <h1 className='text-white text-center pt-5'>no results. . .</h1></div>}
      <div className='d-flex flex-wrap justify-content-center mt-5' style={{ marginLeft: '90px', marginRight: '90px' }}>
        {data ? data.map((value, i) => {
          return (
            <div key={i} className=' mx-3 mb-5'>
              <Link to={`/moviedeatels/${value.imdbID}`}><img className='hoverImage' style={{ borderRadius: '10px', height: '400px', width: '280px', transition: '.2s' }} src={value.Poster} onError={(e) => e.target.style.display = 'none'} /></Link>
            </div>
          )
        }) : empty}
      </div>

    </div >
  )
}
