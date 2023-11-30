import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setIsMinimized(true);
      } else {
        setIsMinimized(false);
      }
    });
  }, []);

  return (
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
            <h3 className={isMinimized ? "accordian-menu" : ""}>| | |</h3>
          </div>
        )}
      </div>
      <div className="navbar-links">
        <nav>
          {/* {isMinimized && (
            <div className={isMinimized ? "accordian-menu" : ""}>| | |</div>
          )} */}
          {!isMinimized && (
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
          )}
        </nav>
      </div>
    </div>
  );
};
