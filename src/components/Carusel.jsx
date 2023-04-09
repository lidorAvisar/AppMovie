import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export default function Carusel() {
  return (
    <div>
      <div  id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carusel-img carousel-inner">
          <div className="carousel-item active" data-bs-interval="5100" >
           <Link to={`/moviedeatels/tt6806448`}><img style={{ width: '100%', height: '100%' }} src="https://images6.alphacoders.com/103/1030419.jpg" className="d-block" alt="..." /></Link>
          </div>
          <div className="carousel-item" data-bs-interval="5100">
           <Link to={`/moviedeatels/tt0848228`}><img style={{ width: '100%', height: '100%' }} src="https://images8.alphacoders.com/100/1003220.png" className="d-block" alt="..." /></Link>
          </div>
          <div className="carousel-item" data-bs-interval="5100">
          <Link to={`/moviedeatels/tt0120338`}><img style={{ width: '100%', height: '100%' }} src="https://images5.alphacoders.com/336/336484.jpg" className="d-block" alt="..." /></Link>
          </div>
        </div>


        <button style={{height:'100%',width:'100px'}} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button style={{height:'100%',width:'100px'}} className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </div>
  )
}
