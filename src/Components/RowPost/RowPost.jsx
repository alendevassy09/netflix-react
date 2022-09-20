import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import axios from '../../axios'
import {apiKey, imgUrl} from '../../constants/constants'
import './RowPost.css'

function RowPost(props) {
const [movies,setMovies] = useState([])
const [urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch((err)=>{
    //  alert('network error')
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  }
  const handleMovie=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-`).then((response)=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log("the length of the array is zero");
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
      {
        movies.map((obj)=>{
          return(
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} src={props.isSmall?`${imgUrl+ obj.backdrop_path}`:`${imgUrl+ obj.poster_path}`} alt="poster" />
          )
        })
      }     
      </div>
    { urlId && <Youtube opts={opts} videoId={urlId.key}  />}
    </div>
  )}
export default RowPost
