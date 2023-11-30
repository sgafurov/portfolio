import React from "react";
import figma from "../images/logos/figma.png";
import firebase from "../images/logos/firebase.png";
import githubLogo from "../images/logos/githubLogo.png";
import mongoDb from "../images/logos/mongodb.png";
import netlify from "../images/logos/netlify.png";
import postgres from "../images/logos/postgres.png";
import "../styles/About.css";

export const About = () => {
  return (
    <div className="about-me-section">
      <h1>About Me</h1>
      <div className="about-me-list">
        <p>🙋‍♂️ Shakhram Gafurov</p>
        <p>📌 Brooklyn, New York</p>
        <p>🎓 Brooklyn College, City University of New York</p>
        <p>📜 Bachelor of Science, Computer Science</p>
      </div>
      <br />
      <h2>Hobbies</h2>
      <div>
        <h1>🥊 ☕ 🛹 📷 🥘</h1>
      </div>
      <br />
      <h2>Languages / Frameworks</h2>
      <div style={{ margin: "20px" }}>
        <img
          alt="javascript"
          src="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145"
        />
        <img
          alt="react"
          src="https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642"
        />
        <img
          alt="node"
          src="https://camo.githubusercontent.com/7d7b100e379663ee40a20989e6c61737e6396c1dafc3a7c6d2ada8d4447eb0e4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3644413535463f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465"
        />
        <img
          alt="java"
          src="https://camo.githubusercontent.com/771cc18a712bf9edb0925a86164c34b0d803c4d9177dd4467eff7b777109c723/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176612d4544384230303f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661266c6f676f436f6c6f723d7768697465"
        />
        <img
          alt="python"
          src="https://camo.githubusercontent.com/27250b9f428b32314f8610e1a996939cc116da5f8c4d8a2f8ed37104275085b8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f507974686f6e2d3134333534433f7374796c653d666f722d7468652d6261646765266c6f676f3d707974686f6e266c6f676f436f6c6f723d7768697465"
        />
      </div>
      <br />
      <h2>Technologies</h2>
      <div style={{ margin: "20px" }}>
        <img className="technology-image" alt="postgres" src={postgres} />
        <img className="technology-image" src={figma} />
        <img className="technology-image" src={firebase} />
        <img className="technology-image" src={githubLogo} />
        <img className="technology-image" src={mongoDb} />
        <img className="technology-image" src={netlify} />
      </div>
    </div>
  );
};
