import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import githubLogo from "../images/logos/githubLogo.png";
import linkedInLogoWhite from "../images/logos/linkedInLogoWhite.png";
import movingProfileIcon from "../images/movingProfileIcon1.5.mp4";
import "../styles/Home.css";
import profileIcon from "../images/blue-profile.png";
import aboutMeIcon from "../images/about.png";
import resumeIcon from "../images/resume.png";
import projectsIcon from "../images/projects.png";

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
    <div className="home-container" id="home-container">
      <h1 className="hello">
        <span>Hi, I am </span>
        <span>
          <span className="job-titles">{title}</span>
          <span className="cursor-blink">|</span>
        </span>
      </h1>
      {/* <div className="intro-container">
        <p className="intro">
          College grad with internship, project-based, and coursework
          experience. Looking for entry level, internship, or full-time software
          engineer roles.
        </p>
      </div> */}

      <div className="icon-container">
        <img src={profileIcon} alt="Profile" className="profile-icon" />
        <img
          src={aboutMeIcon}
          alt="About Me"
          className="about-me-icon"
          onClick={() => navigate("/about")}
        />
        <img
          src={resumeIcon}
          alt="Resume"
          className="resume-icon"
          onClick={() => navigate("/resume")}
        />
        <img
          src={projectsIcon}
          alt="Projects"
          className="projects-icon"
          onClick={() => navigate("/projects")}
        />
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
