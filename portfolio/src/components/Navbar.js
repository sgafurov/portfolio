import myLogo from "../images/myLogo.png";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={myLogo} alt='logo' />
      <div className='navbar-links'>
        <nav>
          <ul>
            <li>Home</li>
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
