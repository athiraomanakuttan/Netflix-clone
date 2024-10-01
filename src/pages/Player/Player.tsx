import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Player = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [apiData , setApiData] =  useState({
        name:"",
        key : "",
        published_at :"",
        type:""
    })
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjI5YWZlZGUzYTdlNmI4YzU2NGZkZTcwOGQ1NjA0ZSIsIm5iZiI6MTcyNzY3MzY1NC42OTYxMzcsInN1YiI6IjY2ZmEzMzljN2YxM2I3YjEyYWEyNzI5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M90Goqm_wRW2MUVWhrFig8sHzT1r-YaIH5up46XuCec'
        }
      };
      
     useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => setApiData(response.results[0]))
        .catch(err => console.error(err));
     },[])
  return (
    <div>
      <div className='player'>
        <img src={back_arrow_icon} alt="" className='player-img' onClick={()=>navigate(-2)}/>
        <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width="90%" title='trailer' frameBorder='0' allowFullScreen></iframe>
        <div className='player-info'>
            <p>{apiData.published_at.slice(0,10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
        </div>
      </div>
    </div>
  )
}

export default Player
