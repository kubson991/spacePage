import Header from "../../components/Header";
import TechNavBar from "../../components/TechNavBar";
import "./index.css";
import data from "../../data.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function stringFormatter(string) {
  if (string) {
    return string.toUpperCase();
  }
}
function imagesFormatter(string) {
  const width=window.innerWidth
  switch (string) {
    case "Spaceport":
      if (width<1750) {
        return 'image-spaceport-landscape.jpg'
      } else{
        return 'image-spaceport-portrait.jpg'
      }
    case "Launch_vehicle":
      if (width<1750) {
        return "image-launch-vehicle-landscape.jpg";
      } else {
        return 'image-launch-vehicle-portrait.jpg'
      }
    case "Space_capsule":
      if (width<1750) {
        return "image-space-capsule-landscape.jpg";
      } else {
        return 'image-space-capsule-portrait.jpg'
      }
      

    default:
      return "";
  }
}

function Technology() {
  const { tech } = useParams();
  const [tecnologyInfo, setTecnologyInfo] = useState({});
  useEffect(() => {
    console.log(data.technology);
    setTecnologyInfo(
      data.technology.find((element) => element.name === tech.replace("_", " "))
    );
    console.log("tecnologyInfo");
  }, [tech]);
 
  return (
    <div className="TechIndexContainer Container">
      <Header></Header>
      <main>
        <div className="titlesContainer">
          <span className="numberh5 navText">03</span>
          <h5>SPACE LAUNCH 101</h5>
        </div>
        <div className="section1">
          <img src={`/technology/${imagesFormatter(tech)}`} alt={tech} />
          <TechNavBar selected={tech}></TechNavBar>
          <div className="contentContainer">
            <p className="subH2">THE TERMINOLOGY...</p>
            <h4>{stringFormatter(tecnologyInfo.name)}</h4>

            <p className="content">{tecnologyInfo.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Technology;
