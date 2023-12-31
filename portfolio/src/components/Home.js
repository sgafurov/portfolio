import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import githubLogo from "../images/logos/githubLogo.png";
import linkedInLogoWhite from "../images/logos/linkedInLogoWhite.png";
import movingProfileIcon from "../images/movingProfileIcon1.5.mp4";
import "../styles/Home.css";

export const Home = () => {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const titles = [
    "Shakhram Gafurov  ",
    "a Fullstack Developer  ",
    "a Frontend Champion  ",
    "a Backend Whisperer  ",
    "here to help  ",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // first display all the letters inside of a title
      if (letterIndex < titles[titleIndex].length) {
        // update the title by appending the next letter
        setTitle((prevTitle) => prevTitle + titles[titleIndex][letterIndex]);
        setLetterIndex((prevIndex) => prevIndex + 1);
      } else {
        // reset letterIndex for the new title
        setLetterIndex(0);
        // if all letters are displayed, move to the next title
        setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        // reset the title once all letters are displayed for a title
        if (letterIndex === titles[titleIndex].length) {
          setTitle("");
        }
      }
    }, 200);
    // clean interval for component unmount
    return () => clearInterval(interval);
  }, [titleIndex, letterIndex]);

  return (
    <div className="home-container">
      <h1 className="hello">
        <span>Hi, I am </span>
        <span>
          <span className="job-titles">{title}</span>
          <span className="cursor-blink">|</span>
        </span>
      </h1>
      <div className="intro-container">
        <p className="intro">
          Recent college grad with internship, project-based, and coursework
          experience. Looking for entry level web development and sofware
          engineer roles.
        </p>
      </div>

      <div className="video-and-table-container">
        <video autoPlay muted controls={false} loop={true} playsInline>
          <source src={movingProfileIcon} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* table is overlayed on the video to provide clickable-hot-spots on the video */}
        <table>
          <tbody>
            {/* new */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td
                className="about-me-td"
                onClick={() => {
                  navigate("/about");
                }}
              ></td>
              <td
                className="about-me-td"
                onClick={() => {
                  navigate("/about");
                }}
              ></td>
            </tr>

            {/* new */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* new */}
            <tr>
              <td
                className="resume-td"
                onClick={() => {
                  navigate("/resume");
                }}
              ></td>
              <td
                className="resume-td"
                onClick={() => {
                  navigate("/resume");
                }}
              ></td>
              <td></td>
              <td></td>
              <td
                className="projects-td"
                onClick={() => {
                  navigate("/projects");
                }}
              ></td>
              <td
                className="projects-td"
                onClick={() => {
                  navigate("/projects");
                }}
              ></td>
            </tr>
            {/* <tr>
              <td></td>
              <td></td>
              <td></td>
              <td
                className="about-me-td"
                onClick={() => {
                  navigate("/about");
                }}
              ></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td
                className="resume-td"
                onClick={() => {
                  navigate("/resume");
                }}
              ></td>
              <td></td>
              <td></td>
              <td
                className="projects-td"
                onClick={() => {
                  navigate("/projects");
                }}
              ></td>
            </tr> */}
          </tbody>
        </table>
      </div>

      <div className="personal-links">
        <ul>
          <li>
            <a href="https://github.com/sgafurov">
              <img src={githubLogo} alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sgafurov/">
              <img src={linkedInLogoWhite} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
