import myLogo from "../images/myLogo.png";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#">
        <img src={myLogo} alt="logo" />
      </a>
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
