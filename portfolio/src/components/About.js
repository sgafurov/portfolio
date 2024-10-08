import React from "react";
// import figma from "../images/logos/figma.png";
// import firebase from "../images/logos/firebase.png";
// import githubLogo from "../images/logos/githubLogo.png";
// import mongoDb from "../images/logos/mongodb.png";
// import netlify from "../images/logos/netlify.png";
// import postgres from "../images/logos/postgres.png";
import "../styles/About.css";

// import PhotoGrid from "./PhotoGrid";

// export const About = () => {
//   return (
//     <main>
//       <div className="about-me-div">
//         <section className="about-me-section">
//           <h1>About Me</h1>
//           <PhotoGrid />
//         </section>
//         <br />
//         <section className="hobbies-section">
//           <h2>Hobbies</h2>
//           <div>
//             <h1>🥊 ☕ 🛹 📷 🥘</h1>
//           </div>
//         </section>
//         <br />
//         <section className="languages-section">
//           <h2>Languages / Frameworks</h2>
//           <div style={{ margin: "20px" }}>
//             <img
//               alt="javascript"
//               src="https://camo.githubusercontent.com/53ec2e58e03ba275d9b3a386abd96a243cf744a1a7121bdf8262fc8ae6ebc335/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145"
//             />
//             <img
//               alt="react"
//               src="https://camo.githubusercontent.com/3babc94d778f96441b3a66615fb5ee88c6ed04f174ed49b04df92b071a7d0e80/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642"
//             />
//             <img
//               alt="node"
//               src="https://camo.githubusercontent.com/0d58facab1be74748c39244ff3d990ae8ddd765af40263ed006219154ba90649/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3644413535463f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465"
//             />
//             <img
//               alt="java"
//               src="https://camo.githubusercontent.com/b0648ef7a9b6980ea27c1caaeb06d5c8503dbb4f9b4d9d7ca1df60a5edc14340/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176612d2532334544384230302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6f70656e6a646b266c6f676f436f6c6f723d7768697465"
//             />
//             <img
//               alt="spring"
//               src="https://camo.githubusercontent.com/c2a58428fe9b38967494da3b0a098f1d28f9cc395e3bbf123cbc14fb36bc1b07/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f737072696e672d2532333644423333462e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d737072696e67266c6f676f436f6c6f723d7768697465"
//             />
//             <img
//               alt="postgres"
//               src="https://camo.githubusercontent.com/bf590679058d9d1074a82721726ea4a5bf048b4b8cce82d01ba8ca32585e0298/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f7374677265732d2532333331363139322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706f737467726573716c266c6f676f436f6c6f723d7768697465"
//             />
//           </div>
//         </section>
//         <br />
//         <section className="technologies-section">
//           <h2>Technologies</h2>
//           <div style={{ margin: "20px" }}>
//             <img className="technology-image" alt="postgres" src={postgres} />
//             <img className="technology-image" src={figma} />
//             <img className="technology-image" src={firebase} />
//             <img className="technology-image" src={githubLogo} />
//             <img className="technology-image" src={mongoDb} />
//             <img className="technology-image" src={netlify} />
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

export const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-text">
        <h3 className="about-subtitle">Education</h3>
        <p className="about-paragraph">
          I obtained my bachelor's in Computer Science at Brooklyn College. I'm
          currently pursuing a master's in Computer Science at Hofstra
          University. My coursework includes data structures, algorithms,
          object-oriented programming, and web development. I'm particularly
          interested in solving real-world problems, and creating helpful tools
          for people.
        </p>

        <h2 className="about-subtitle">Hobbies</h2>
        <p className="about-paragraph">
          Outside of my academic pursuits, I enjoy:
        </p>
        <ul className="about-list">
          <li>Playing backgammon🎲</li>
          <li>Photography 📷</li>
          <li>Kickboxing 🥊</li>
          <li>Killing time in cafes☕</li>
          <li>Cooking 🥘</li>
        </ul>

        <h3 className="about-subtitle">Programming Languages</h3>
        <p className="about-paragraph">
          I'm proficient in a variety of programming languages frameworks, and
          technologies:
        </p>
        <div className="about-languages">
          {[
            "JavaScript",
            "Java",
            "SQL",
            "React",
            "Spring",
            "Node",
            "Python",
            "HTML",
            "CSS",
            "Tailwind",
            "Express",
            "MongoDB",
            "PostgreSQL",
          ].map((lang) => (
            <span key={lang} className="language-badge">
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
