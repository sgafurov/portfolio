import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  const [isMinimized, setIsMinimized] = useState(window.innerWidth <= 768);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMinimized(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  const toggleDropdown = () => setIsDropdownVisible((prev) => !prev);

  const handleLinkClick = () => setIsDropdownVisible(false);

  const navLinks = [
    <Link to="/" onClick={handleLinkClick}>Home</Link>,
    <Link to="/about" onClick={handleLinkClick}>About</Link>,
    <Link to="/resume" onClick={handleLinkClick}>Resume</Link>,
    <Link to="/projects" onClick={handleLinkClick}>Projects</Link>,
    <Link to="/contact" onClick={handleLinkClick}>Contact</Link>,
  ];

  return (
    <div className="outer-navbar-container">
      <div className="navbar">
        <div className="logo">
          <div>
            <h1>
              <Link as={Link} to="/">
                Shakhram G.
              </Link>
            </h1>
          </div>
          {isMinimized && (
            <div>
              <h1 className={"accordian-menu"} onClick={toggleDropdown}>
                ☰
              </h1>
              {isDropdownVisible && (
                <div
                  className="dropdown-menu"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {navLinks}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="navbar-links">
          {!isMinimized && (
            <nav>
              <ul>
                {navLinks.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};
