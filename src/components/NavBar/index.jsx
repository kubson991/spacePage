import './index.css'
import { Link } from "react-router-dom";



function NavBar({selected}) {
    return (
        <section className='NavBar'>
            <Link to="/destination/Moon"><span className={`navText ${selected==='Moon' && 'selected'}`}>MOON</span></Link>
            <Link to="/destination/Mars"><span className={`navText ${selected==='Mars' && 'selected'}`}>MARS</span></Link>
            <Link to="/destination/Europa"><span className={`navText ${selected==='Europa' && 'selected'}`}>EUROPA</span></Link>
            <Link to="/destination/Titan"><span className={`navText ${selected==='Titan' && 'selected'}`}>TITAN</span></Link>
        </section>
    )
  }
  
  export default NavBar
  