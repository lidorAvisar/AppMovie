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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '800px' }}>
        {loading && <span style={{ height: '100vh' }} className='fs-3 d-flex justify-content-center align-items-center text-white'>loading<BeatLoader color="#db0e0e" loading margin={5} speedMultiplier={1} /></span>}
        <div>
          <div>
            {<img style={{  }} src={data.Poster} alt="" />} <br />
            <button onClick={(e) => { navigate(-1) }} className='btn btn-dark'>back</button>
          </div>
        </div>
        <div className='text-white'>
          <h1>Title: {data.Title}</h1>
          <p>Plot: {data.Plot}</p>
          <p>Genre: {data.Genre}</p>
          <p>Actors: {data.Actors}</p>
          <p>Year: {data.Year}</p>
          <p>Released: {data.Released}</p>
          <p>Runtime: {data.Runtime}</p>
          <p>Director: {data.Director}</p>
        </div>
      </div>

    </div>
  )
}
