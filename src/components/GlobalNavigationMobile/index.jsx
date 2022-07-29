import { Link } from "react-router-dom";
import "./index.css";

function GlobalNavigationMobile({ close }) {
  return (
    <section className="GlobalNavBarContainer">
      <div className="outsite" onClick={() => close()}></div>
      <nav className="GlobalNavBar">
        <ul>
          <li>
            <Link to="/" className="navText">
              <span className="navText">00</span> HOME
            </Link>
          </li>
          <li>
            <Link to="/destination/Moon" className="navText">
              <span className="navText">01</span> DESTINATION
            </Link>
          </li>
          <li>
            <Link to="/crew/Douglas_Hurley" className="navText">
              <span className="navText">02</span> CREW
            </Link>
          </li>
          <li>
            <Link to="/Technology/Launch_vehicle" className="navText">
              <span className="navText">03</span> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default GlobalNavigationMobile;
