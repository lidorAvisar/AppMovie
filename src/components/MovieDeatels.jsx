import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";

export default function MovieDeatels() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();


  const getData = async () => {
    const { data } = await axios.get(`https://omdbapi.com/?i=${params.id}&apikey=64dc74b3`);
    console.log(data);
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 300);
  }, [])


  return (
    <div>
      <div className='container d-lg-flex' style={{ justifyContent: 'center', alignItems: 'center', height: '900px' }}>
        {loading && <span style={{ height: '100vh' }} className='fs-3 d-flex justify-content-center align-items-center text-white'>loading. . .<BeatLoader color="#db0e0e" loading margin={5} speedMultiplier={1} /></span>}
        {/* title */}
        <div className='text-white d-lg-none text-center pt-5'><span style={{ fontSize: '60px', color: 'white' }}>{data.Title}</span><br />
          <div className='py-3'><span className='fs-5 px-2' style={{ borderRight: '1px solid white' }}>{data.Runtime}</span><span style={{ borderRight: '1px solid white' }} className='px-2 fs-5'>{data.Language}</span><span style={{ borderRight: '1px solid white' }} className='px-2 fs-5'>{data.Year}</span></div>
        </div>
        {/* image */}
        <div className='d-flex justify-content-center'>
          <div className='mt-2 mt-lg-5 pt-lg-5'>
            {<img style={{ height: '500px', width: "350px" }} src={data.Poster} alt="" />} <br />
            <button onClick={(e) => { navigate(-1) }} className='btn btn-info my-3 px-4 fs-5 fw-bold d-none d-lg-flex' style={{ fontFamily: 'monospace' }}>back</button>
          </div>
        </div>
        {/* text */}
        <div>
          <div className='d-none d-lg-flex'>
            <div className='ms-5 text-white' style={{ marginTop: '-58px', height: '210px' }}><span style={{ fontSize: '60px', color: 'white' }}>{data.Title}</span><br />
              <div className='py-3'><span className='fs-5 px-2' style={{ borderRight: '1px solid white' }}>{data.Runtime}</span><span style={{ borderRight: '1px solid white' }} className='px-2 fs-5'>{data.Language}</span><span style={{ borderRight: '1px solid white' }} className='px-2 fs-5'>{data.Year}</span></div>
            </div>
          </div>
          <div className='text-white ms-5 py-4 ps-2' style={{ height: '260px' }}>
            <div style={{ width: '90%' }}><h5> <span style={{ fontSize: '25px', textDecorationLine: 'underline' }}>Plot:</span>  {data.Plot}</h5></div>
            <div className='py-2'> <h5> <span style={{ fontSize: '25px', textDecorationLine: 'underline' }}>Genre:</span>  {data.Genre}</h5></div>
            <div className='py-2'> <h5> <span style={{ fontSize: '25px', textDecorationLine: 'underline' }}>Actors:</span>  {data.Actors}</h5></div>
            <div className='py-2'> <h5> <span style={{ fontSize: '25px', textDecorationLine: 'underline' }}>Released:</span>  {data.Released}</h5></div>
            <div className='py-2'> <h5> <span style={{ fontSize: '25px', textDecorationLine: 'underline', paddingBottom: '50px' }}>Director:</span>  {data.Director}</h5></div>
            <div>
              <button onClick={(e) => { navigate(-1) }} className='btn btn-info my-3 px-4 fs-5 fw-bold d-lg-none' style={{ fontFamily: 'monospace' }}>back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
