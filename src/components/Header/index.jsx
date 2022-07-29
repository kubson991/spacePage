import "./index.css";
import GlobalNavigationMobile from "../GlobalNavigationMobile";
import GlobalNavigation from "../GlobalNavigation";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  window.onresize = rezise;
  const [menuOpenMobile, setmenuOpenMobile] = useState(false);
  const [screenSize, setscreenSize] = useState("mobile");

  function rezise(e) {
    const scrreenWidth = e.path[0].innerWidth;
    if (scrreenWidth < 750) {
      setscreenSize("mobile");
    } else {
      setscreenSize("tablet");
    }
  }
  const menuSwitch = () => {
    setmenuOpenMobile(!menuOpenMobile);
  };
  useEffect(() => {
    if (screen.width < 750) {
      setscreenSize("mobile");
    } else {
      setscreenSize("tablet");
    }
  }, []);
  return (
    <header>
      <Link to="/" className="headerIcon"></Link>
      {screenSize === "mobile" ? (
        <button className="hamburger" onClick={() => menuSwitch()}></button>
      ) : (
        <GlobalNavigation></GlobalNavigation>
      )}

      {!!menuOpenMobile && (
        <GlobalNavigationMobile close={menuSwitch}></GlobalNavigationMobile>
      )}
    </header>
  );
}

export default Header;
