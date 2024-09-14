import React from "react";
import "../styles/PhotoGrid.css"; // Import the CSS file
import locationImage from "../images/about-me/location.jpg";
import collegeImage from "../images/about-me/college.jpg";
import degreeImage from "../images/about-me/degree.jpg";

const photos = [
  { src: locationImage, title: "📌 Brooklyn, New York" },
  { src: collegeImage, title: "🎓 Brooklyn College" },
  { src: degreeImage, title: "📜 B.S, Computer Science" },
];

const PhotoGrid = () => {
  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <div className="photo-item" key={index}>
          <img src={photo.src} alt={photo.title} className="photo-image" />
          <div className="photo-overlay">
            <div className="photo-title">{photo.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
