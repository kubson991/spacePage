import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function GlobalNavigation() {
  const [route,setRoute]=useState('/')
  useEffect(()=>{
    const URL=window.location.href.toLocaleLowerCase()
    if (URL.includes('destination')) {
      setRoute('destination')
    }else if(URL.includes('crew')){
      setRoute('crew')
    }else if(URL.includes('technology')){
      setRoute('technology')
    }else{
      setRoute('/')
    }
  },[window.location.href])
  return (
    <section className="NavBarContainer">
      <nav className="GlobalNavBar">
        <div className={`${route==='/' ? 'selected' : ''}`}>
          <Link to="/" className="navText" number="00">
            HOME
          </Link>
        </div>
        <div className={`${route==='destination' ? 'selected' : ''}`}>
          <Link to="/destination/Moon" className="navText" number="01">
            DESTINATION
          </Link>
        </div>
        <div className={`${route==='crew' ? 'selected' : ''}`}>
          <Link to="/crew/Douglas_Hurley" className="navText" number="02">
            CREW
          </Link>
        </div>
        <div className={`${route==='technology' ? 'selected' : ''}`}>
          <Link to="/Technology/Launch_vehicle" className="navText" number="03">
            TECHNOLOGY
          </Link>
        </div>
      </nav>
    </section>
  );
}

export default GlobalNavigation;
