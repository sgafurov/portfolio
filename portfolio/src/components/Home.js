import { useEffect, useState } from "react";
import githubLogo from "../images/githubLogo.png";
import linkedInLogo from "../images/linkedInLogo.png";
import "../styles/Home.css";

export const Home = () => {
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
    }, 170);
    // clean interval for component unmount
    return () => clearInterval(interval);
  }, [titleIndex, letterIndex]);

  return (
    <div>
      <h1>
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
      <div className="personal-links">
        <ul>
          <li>
            <a href="https://github.com/sgafurov">
              <img src={githubLogo} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sgafurov/">
              <img src={linkedInLogo} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
