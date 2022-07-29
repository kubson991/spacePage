import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import "./index.css";
import { useEffect, useState } from "react";

function stringFormatter(string) {
  if (string) {
    return string.toUpperCase();
  }
}

function Destination() {
  const { location } = useParams();
  const [star, setStar] = useState({});
  useEffect(() => {
    setStar(data.destinations.find((element) => element.name === location));
  }, [location]);

  return (
    <div className="Container destinationContainer">
      <Header></Header>
      <main>
        <div className="section1">
          <div className="titlesContainer">
            <span className="numberh5 navText">01</span>
            <h5>Pick your destination</h5>
          </div>
          <img
            src={`/destination/image-${
              star.name ? star.name.toLowerCase() : ""
            }.webp`}
            alt="Moon"
          />
        </div>

        <div className="section2">
          <NavBar selected={star.name}></NavBar>
          <h3>{stringFormatter(star.name)}</h3>
          <p className="content">{star.description}</p>
          <section className="dataDestination">
            <article>
              <p className="subH2">AVG. DISTANCE</p>
              <p className="subH1">{stringFormatter(star.distance)}</p>
            </article>
            <article>
              <p className="subH2">EST. TRAVEL TIME</p>
              <p className="subH1">{stringFormatter(star.travel)}</p>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Destination;
Destination;
