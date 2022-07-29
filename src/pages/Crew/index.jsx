import Header from "../../components/Header";
import CrewNavBar from "../../components/CrewNavBar";
import "./index.css";
import data from "../../data.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function stringFormatter(string) {
  if (string) {
    return string.toUpperCase();
  }
}
function stringFormatterCrew(string) {
  if (string) {
    return string.toLowerCase().replace("_", "-")
  }
  else{
    return ''
  }
}

function Crew() {
  const { member } = useParams();
  const [memberInfo, setMemberInfo] = useState({});
  useEffect(() => {
    setMemberInfo(
      data.crew.find((element) => element.name === member.replace("_", " "))
    );
  }, [member]);

  return (
    <div className="CrewIndexContainer Container">
      <Header></Header>
      {/* <main>
        <div className="titlesContainer">
          <span className="numberh5 navText">02</span>
          <h5>MEET YOUR CREW</h5>
        </div>
        <img src={`/crew/image-${stringFormatterCrew(member)}.webp`} alt={member} />
        <CrewNavBar selected={member}></CrewNavBar>
        <p className="subH2">{stringFormatter(memberInfo.role)}</p>
        <h4>{stringFormatter(memberInfo.name)}</h4>

        <p className="content">{memberInfo.bio}
        </p>
      </main> */}
    </div>
  );
}

export default Crew;
