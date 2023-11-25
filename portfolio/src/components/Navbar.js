import myLogo from "../images/myLogo.png";
import codeLogo from "../images/codeLogo.png";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-and-name">
        <div className="logo-div">
          <a href="#">
            <img src={codeLogo} alt="logo" className="logo" />
          </a>
        </div>
        <a href="#">
          <h1>Shakhram G.</h1>
        </a>
      </div>
      <div className="navbar-links">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>About</li>
            <li>Resume</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
