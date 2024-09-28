import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import hero_banner  from '../../assets/hero_banner.jpg'
import hero_title  from '../../assets/hero_title.png'
import play_icon  from '../../assets/play_icon.png'
import info_icon  from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'



const Home = () => {
  return (
    <>
    <Navbar />
    <div>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='hero-title'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum debitis explicabo.</p>
          <div className="button-div flex  mb-10 gap-0">
          <button className='btn   flex gap-2 bg-slate-100 m-5 p-1 items-center pr-5 rounded hover:bg-slate-400'><img src={play_icon} alt="play icon" className='icon w-6'/><span>Play</span></button>
          <button className='btn btn-dark   flex gap-2 bg-gray-400 hover:bg-gray-800 m-5 p-1 items-center pr-5 rounded'><img src={info_icon} alt="info icon"  className='icon w-8'/><span>More info</span></button>
          </div>
          <TitleCards/>
        </div>
        
      </div>
    </div>
    
    </>
    
  )
}

export default Home
