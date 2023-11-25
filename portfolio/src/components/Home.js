import { useEffect, useState } from "react";
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
    "a coffee enthusiast  ",
    "here to help  ",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // first display all the letters inside of a title
      if (letterIndex < titles[titleIndex].length) {
        // update the title by adding the next letter
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
    }, 150);

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
      <p>More Info...</p>
    </div>
  );
};
