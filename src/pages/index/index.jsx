import Header from "../../components/Header";
import "./index.css";
import { Link } from "react-router-dom";
function Index() {
  return (
    <div className="IndexContainer Container">
      <Header></Header>
      <main className="indexContainer ">
        <div>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link to="/destination/Moon">
          <div className="PrincipalButton">
            <p>EXPLORE</p>
          </div>
        </Link>
      </main>
    </div>
  );
}

export default Index;
