import './index.css'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';


function CrewNavBar({selected}) {
    return (
        <section className='CrewNavBar'>
            <Link to="/crew/Douglas_Hurley" className={`circle ${selected==='Douglas_Hurley' && 'selected'}`}></Link>
            <Link to="/crew/Mark_Shuttleworth" className={`circle ${selected==='Mark_Shuttleworth' && 'selected'}`}></Link>
            <Link to="/crew/Victor_Glover" className={`circle ${selected==='Victor_Glover' && 'selected'}`}></Link>
            <Link to="/crew/Anousheh_Ansari" className={`circle ${selected==='Anousheh_Ansari' && 'selected'}`}></Link>
        </section>
    )
  }
  
export default CrewNavBar
  