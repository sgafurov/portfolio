import { Link } from "react-router-dom";
import codeLogo from "../images/codeLogo.png";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-and-name">
        {/* <div className="logo-div">
          <a href="#">
            <img src={codeLogo} alt="logo" className="logo" />
          </a>
        </div> */}
        <h1>
          <Link as={Link} to="/">
            Shakhram G.
          </Link>
        </h1>
      </div>
      <div className="navbar-links">
        <nav>
          <ul>
            <li>
              <Link as={Link} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link as={Link} to="/about">
                About
              </Link>
            </li>
            {/*<li>Resume</li>
            <li>Projects</li>
            <li>Contact</li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};
