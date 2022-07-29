import "./index.css";
import { Link } from "react-router-dom";

function TechNavBar({ selected }) {
  return (
    <section className="TechNavBar">
      <Link
        to="/Technology/Launch_vehicle"
        className={`circle ${selected === "Launch_vehicle" && "selected"}`}
      >
        <span>1</span>
      </Link>
      <Link
        to="/Technology/Spaceport"
        className={`circle ${selected === "Spaceport" && "selected"}`}
      >
        <span>2</span>
      </Link>
      <Link
        to="/Technology/Space_capsule"
        className={`circle ${selected === "Space_capsule" && "selected"}`}
      >
        <span>3</span>
      </Link>
    </section>
  );
}

export default TechNavBar;
