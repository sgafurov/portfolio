import React from "react";

const AboutNav = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "200px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ margin: "20px 0" }}>
          <a
            href="#section1"
            style={{ textDecoration: "none", color: "black" }}
          >
            Section 1
          </a>
        </li>
        <li style={{ margin: "20px 0" }}>
          <a
            href="#section2"
            style={{ textDecoration: "none", color: "black" }}
          >
            Section 2
          </a>
        </li>
        <li style={{ margin: "20px 0" }}>
          <a
            href="#section3"
            style={{ textDecoration: "none", color: "black" }}
          >
            Section 3
          </a>
        </li>
        <li style={{ margin: "20px 0" }}>
          <a
            href="#section4"
            style={{ textDecoration: "none", color: "black" }}
          >
            Section 4
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default AboutNav;
