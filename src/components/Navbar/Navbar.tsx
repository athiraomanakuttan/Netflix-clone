import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from '../../assets/profile_img.png'
import cart_icon from '../../assets/caret_icon.svg'
import { useEffect, useRef } from "react";
import { logOut} from '../../firebase'
const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null)
  useEffect(()=>{
      window.addEventListener('scroll',()=>{
        if (navRef.current) {
          if (window.scrollY >= 80) {
            navRef.current.classList.add('nav-dark');
          } else {
            navRef.current.classList.remove('nav-dark');
          }
        }
      })
  },[])
  return ( 
    <div className="navbar-div" ref={navRef}>
      <div className="navbar-left flex gap-10 align-middle ">
        <img src={logo} alt="Logo image "  className="w-[90px]"/>
        <ul className="flex gap-6">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movie</li>
          <li>New & popular</li>
          <li>My list</li>
          <li>Browse by language</li>
        </ul>
      </div>
      <div className="navbar-right flex items-center gap-3">
        <img src={search_icon} alt="" className="w-5 cursor-pointer" />
        <p>childern</p>
        <img src={bell_icon} alt="" className="w-5 cursor-pointer" />
        <div className="navbar-profile flex items-center gap-1">
          <img src={profile_img} alt="" className="w-6" />
          <img src={cart_icon} alt="" />
          <div className="dropdown" >
            <p onClick={logOut}>Sign&nbsp;Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
