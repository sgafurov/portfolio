import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setIsMinimized(true);
      } else {
        setIsMinimized(false);
      }
    });
  }, []);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

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
              <h1
                className={isMinimized ? "accordian-menu" : ""}
                onClick={toggleDropdown}
              >
                ☰
              </h1>
              {isDropdownVisible && (
                <div
                  className="dropdown-menu"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <br />
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="navbar-links">
          {!isMinimized && (
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
          )}
        </div>
      </div>
    </div>
  );
};
