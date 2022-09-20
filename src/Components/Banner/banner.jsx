import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../axios'
import {apiKey,imgUrl} from '../../constants/constants'
import './banner.css'
function Banner() {
  const [film,setFilm]=useState()
 useEffect(()=>{
    
      axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
        function getRandomInt() {
          return Math.floor(Math.random() *response.data.results.length);
        }
        console.log(response.data.results[getRandomInt()])
        setFilm(response.data.results[getRandomInt()])
      })
     
},[])
  return (
    
    <div className='banner' style={{backgroundImage:`url(${film ? imgUrl+film.backdrop_path:""})`}}>
      <div className='content'>
        <h1 className='title'>{film ? film.title:""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
        <h1 className='description'>{film ? film.overview:""}</h1>
        
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}
export default Banner
