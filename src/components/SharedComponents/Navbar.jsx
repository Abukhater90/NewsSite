import { NavLink, Link } from "react-router-dom";
import logo from "/src/assets/logo.png";

import "/src/css/navbarstyle.css";


function Navbar() {
  return (
    <>
      <nav id="main-nav">
        <div className="container">
          <img src={logo} alt="NewsGrid" className="logo" />
          <div className="social">
            <Link to="http://facebook.com" target="_blank">
              <i className="fab fa-facebook fa-2x"></i>
            </Link>
            <Link to="http://twitter.com" target="_blank">
              <i className="fab fa-twitter fa-2x"></i>
            </Link>
            <Link to="http://instagram.com" target="_blank">
              <i className="fab fa-instagram fa-2x"></i>
            </Link>
            <Link to="http://youtube.com" target="_blank">
              <i className="fab fa-youtube fa-2x"></i>
            </Link>
          </div>
          <ul className="list">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="current" to="about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;